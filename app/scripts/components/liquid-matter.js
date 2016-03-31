var RenderCustom = require('../custom-pixi-renderer').RenderCustom;
var Common = Matter.Common;  
var World = Matter.World;  
var Composite = Matter.Composite;  
var Composites = Matter.Composites;  
var Bounds = Matter.Bounds;  
var Body = Matter.Body;  
var Bodies = Matter.Bodies;  
var Engine = Matter.Engine;  
var Events = Matter.Events;

var engine;  
var waterBlock;

var oldLevel = 0;  
var tween;  

console.log('matterbegin');
function setLevel(level, _time) {  
    var autoTime = Math.abs(oldLevel - level) * 1.5;
    var time = _time || autoTime;
    var pos = { y: waterBlock.position.y };

    var emptyY = engine.render.options.height + engine.render.options.height / 2;
    var fullY = engine.render.options.height / 2 + 10;

    var targetY = emptyY + (fullY - emptyY) * level;

    if (tween) tween.kill();
    tween = TweenLite.to(pos, time, { y: targetY, ease: Power1.easeInOut, onUpdate: function() {
        oldLevel = (pos.y - emptyY) / (fullY - emptyY);
        Body.translate(waterBlock, {
            x: 0,
            y: pos.y - waterBlock.position.y
        });
    }, onComplete: function() {
        oldLevel = level;
    }});
}

function fill() {  
    setLevel(1);
}

function empty() {  
    setLevel(0);
}

$(function() {
    var container = document.getElementById('canvas-container');
    var engineOpts = {
        /*enableSleeping: true,*/
        render: {
            options: {
                hasBounds: true,
                height: 200,
                width: 200
            },
            controller: RenderCustom
        }
    };
    engine = Engine.create(container, engineOpts);
    Engine.run(engine);

    var w = engine.render.options.width;
    var h = engine.render.options.height;

    var offset = 25;
    World.add(engine.world, [
        Bodies.rectangle(w/2, -offset, w + 2 * offset, 50, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(w/2, h + offset, w + 2 * offset, 50, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(w + offset, h/2, 50, h + 2 * offset, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(-offset, h/2, 50, h + 2 * offset, { isStatic: true, render: { visible: false } })
    ]);

    var waterBlockOpts = {
       isStatic: true,
        render: {
             fillStyle: '#fff',
             lineWidth: 0
        }
    };

    waterBlock = Bodies.rectangle(engine.render.options.width * 0.5,
                                  engine.render.options.height * 1.5,
                                  engine.render.options.width * 2,
                                  engine.render.options.height,
                                  waterBlockOpts);

    var particleWidth = 2;
    var numParticles = Math.floor((engine.render.options.width) / (particleWidth + 2));

    var particleOpts = {
        restitution: 0.7,
        friction: 0.2,
        frictionAir: 0,
        density: 0.01,
        render: {
             fillStyle: '#fff',
             lineWidth: 0,
             strokeStyle: '#fff'
        }
    };

    var particles = Composites.stack(0, engine.render.options.height - 50, numParticles, 3, 0, 0, function(x, y, column, row) {
        return Bodies.circle(x, y, particleWidth, particleOpts, 100);
    });

    World.add(engine.world, [
        particles,
        waterBlock
    ]);

    Events.on(engine, 'beforeUpdate', function(event) {
        var bodies = particles.bodies;
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.isStatic) {
                /*var forceMagnitude = 0.0001;
                Body.applyForce(body, { x: 0, y: 0 }, {
                    x: forceMagnitude * Common.random(-1, 1),
                    y: forceMagnitude * Common.random(-1, 1),
                });*/

                Body.translate(body, {
                    x: Common.random(-1, 1) * 0.25,
                    y: Common.random(-1, 1) * 0.25
                });
            }
        }
    });

    engine.render.options.background = 'transparent';
    engine.render.options.wireframes = false;
    engine.render.options.blurFilter = true;
    engine.render.options.thresholdFilter = true;
   // engine.render.options.transparent = true;


    $('#canvas-container canvas').click(function(e){
        var offset = $(this).offset();
        var relY = e.pageY - offset.top;
        setLevel(1 - relY / engine.render.options.height);
    });

});