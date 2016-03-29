var DefineProperty = require('../helper/DefineProperty');
var Random = require("random-js")();




// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
       Body = Matter.Body,
       Events=Matter.Events,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;


var Bodies = Matter.Bodies;
var MouseConstraint = Matter.MouseConstraint;
var Common = Matter.Common;
var _mouseDown=false;
var RenderPixi=Matter.RenderPixi

//
var graphics = new PIXI.Graphics();
// draw a shape
graphics.lineStyle(0);
graphics.beginFill(0xFFFF0B, 0.5);
graphics.drawCircle(0, 90,60);
graphics.endFill();;





// create a Matter.js engine
var engine = Engine.create({
    render: {
        element: document.getElementById('matterWorld')
       ,controller: RenderPixi
    }
});

//Matter.RenderPixi.setBackground('transparent');

var mouseConstraint = MouseConstraint.create(engine, {
  constraint: {
    render: {
      visible: false
    }
  }
});
World.add(engine.world, mouseConstraint);
mouseConstraint.visible=false;

// create two boxes and a ground
var boxA = function(){return Bodies.rectangle(250, 500, 80, 80)};
var boxB = Bodies.rectangle(450, 50, 80, 80);

 var offset = 5;
        World.add(engine.world, [
            Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
            Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
        ]);




 var particleOptions = { 
            friction: 0.05,
            frictionStatic: 0.1,
            render: { visible: true } 
        };

        World.add(engine.world,[
        
           // Composites.softBody(250, 400, 4, 4, 0, 0, true, 15, particleOptions)
        ]);

var texture = PIXI.Texture.fromImage('images/monster.png');


var monster = function(){
	return Bodies.rectangle(250, 400, 200,262, {
	                restitution: 0.95,
                    render: {
                        strokeStyle: '#ffffff',
                        sprite: {
                         texture: './images/monster.png'
                        }
                    }
                });
}();

var monsters = function(){
	return Bodies.rectangle(250, 400, 200,262, {
	                restitution: 0.95,
                    render: {
                        strokeStyle: '#ffffff',
                        sprite: {
                         texture: './images/monster.png'
                        }
                    }
                });
};

$('#matterWorld').on('click', function () {
    //World.add(engine.world, monsters());
})




Events.on(mouseConstraint, "mousemove", function(){
	
	if(!_mouseDown) return;
	//console.log('angle:'+monster.angle);
	//console.log('angle:'+monster.angularVelocity);
	//Matter.Body.scale(monster, 1, 0.5)
	if(mouseConstraint.body==monster){
	var ry=Random.integer(7, 11)/10;
	var rx=Random.integer(9, 11)/10;
//TweenMax.to(monster.render.sprite,3,{yScale:ry,ease:Elastic.easeOut})
//TweenMax.to(monster.render.sprite,3,{xScale:rx,ease:Elastic.easeOut})
}else{
//TweenMax.to(monster.render.sprite,1,{yScale:1,ease:Elastic.easeOut})
//TweenMax.to(monster.render.sprite,1,{xScale:1,ease:Elastic.easeOut})

}
	

})

Events.on(mouseConstraint, "mousedown", function(){
	
_mouseDown=true


})
Events.on(mouseConstraint, "mouseup", function(){
_mouseDown=false
	//Matter.Body.scale(monster, 1,1)
TweenMax.to(monster.render.sprite,1,{yScale:1,ease:Elastic.easeOut})


})
Events.on(mouseConstraint, "startdrag", function(){
_mouseDown=false
	//Matter.Body.scale(monster, 1,1)
//TweenMax.to(monster.render.sprite,1,{yScale:1,ease:Elastic.easeOut})

})


Events.on(engine, "tick", function(){
   if(mouseConstraint.body==monster){
		$('#matterWorld').css('cursor','pointer');
	}else{
		$('#matterWorld').css('cursor','auto');
	};
TweenMax.to($('#monster'),.03,{x:monster.position.x-100,y:monster.position.y-131,ease:Elastic.easeOut})
TweenMax.to($('#monster'),0,{rotation:monster.angle*180/Math.PI})
	//$('#monster').css('margin-x',monster.position.x);
	//$('#monster').css('margin-y',monster.position.y);

	
//console.log(monster.inertia);
})
window.monster=monster;

var monsterAngle = document.createElement('fake');
document.body.appendChild(monsterAngle);
DefineProperty.addProperty(
monsterAngle,'rotate',
 function() {
       return monster.angle;
    },
    function(value) {
       Matter.Body.setAngle(monster, value)
    });

window.monsterAngle=monsterAngle;
Events.on(engine, 'collisionStart', function(event) {
TweenMax.to(monsterAngle,1,{rotate:0})

 })
Events.on(engine, 'collisionEnd', function(event) {
TweenMax.to(monsterAngle,1,{rotate:0})


 })
// add all of the bodies to the world
World.add(engine.world, [monster,boxA]);


 var renderOptions = engine.render.options;
        renderOptions.showAngleIndicator = false;
        renderOptions.wireframes = false;
//engine.render.options.background = 'transparent';
//Matter.RenderPixi.setBackground(engine.render, 'transparent');



// run the engine
Engine.run(engine);