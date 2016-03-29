//mouse

var mouseDown = 0;
var previousX = 0;
var previousY = 0;
var posx = 0;
var posy = 0;

var mouseMoveFunc;

document.body.onmousedown = function (e) {
    mouseDown = 1;
    getMousePosition(e);

    previousX = posx;
    previousY = posy;
};

document.body.onmouseup = function () {
    mouseDown = 0;
};

function getMousePosition(eventArgs) {
    var e;

    if (!eventArgs)
        e = window.event;
    else {
        e = eventArgs;
    }

    if (e.offsetX || e.offsetY) {
        posx = e.offsetX;
        posy = e.offsetY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX;
        posy = e.clientY;
    }

    if (e.preventDefault)
        e.preventDefault();
}

function onMouseMove(e) {
    if (!mouseDown)
        return;
    getMousePosition(e);

    mouseMoveFunc(posx, posy, previousX, previousY);

    previousX = posx;
    previousY = posy;
}

function registerMouseMove(elem, func) {
    elem.onmousemove = onMouseMove;

    mouseMoveFunc = func;
};




//backround
var circlesCount = 100; // Circles count used by the wormhole
var offsetX = 70; // Wormhole center offset (X)
var offsetY = 40; // Wormhole center offset (Y)
var maxDepth = 1.5; // Maximal distance for a circle
var circleDiameter = 10.0; // Circle diameter
var depthSpeed = 0.001; // Circle speed
var angleSpeed = 0.05; // Circle angular rotation speed

var canvas = document.getElementById("backgroundCanvas");
var context = canvas.getContext("2d");
var stats = document.getElementById("stats");

// Fonction de projection 
function perspective(fov, aspectRatio, x, y) {
    var yScale = Math.pow(Math.tan(fov / 2.0), -1);
    var xScale = yScale / aspectRatio;

    var M11 = xScale;
    var M22 = yScale;

    var outx = x * M11 + canvas.width / 2.0;
    var outy = y * M22 + canvas.height / 2.0;

    return { x: outx, y: outy };
}

// Définition de la function cercle
function Circle(initialDepth, initialAngle, intensity) {
    var angle = initialAngle;
    this.depth = initialDepth;
    var color = intensity;

    this.draw = function () {
        var x = offsetX * Math.cos(angle);
        var y = offsetY * Math.sin(angle);

        var project = perspective(0.9, canvas.width / canvas.height, x, y);
        var diameter = circleDiameter / this.depth;

        var ploX = project.x - diameter / 2.0;
        var ploY = project.y - diameter / 2.0;

        context.beginPath();
        context.arc(ploX, ploY, diameter, 0, 2 * Math.PI, false);
        context.closePath();

        var opacity = 1.0 - this.depth / maxDepth;
        context.strokeStyle = "rgba(" + color + "," + color + "," + color + "," + opacity + ")";
        context.lineWidth = 4;

        context.stroke();

        this.depth -= depthSpeed;
        angle += angleSpeed;

        if (this.depth < 0) {
            this.depth = maxDepth + this.depth;
        }
    };
};

// Initialization
var circles = [];

var angle = Math.random() * Math.PI * 2.0;

var depth = maxDepth;
var depthStep = maxDepth / circlesCount;
var angleStep = (Math.PI * 2.0) / circlesCount;
for (var index = 0; index < circlesCount; index++) {
    circles[index] = new Circle(depth, angle, index % 5 == 0 ? 200 : 255);

    depth -= depthStep;
    angle -= angleStep;
}

// FPS
var previous = [];
function computeFPS() {
    if (previous.length > 60) {
        previous.splice(0, 1);
    }
    var start = (new Date).getTime();
    previous.push(start);
    var sum = 0;

    for (var id = 0; id < previous.length - 1; id++) {
        sum += previous[id + 1] - previous[id];
    }

    var diff = 1000.0 / (sum / previous.length);

    stats.innerHTML = diff.toFixed() + " fps";
}

// Drawing & Animation
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function wormHole() {
    computeFPS();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 130 - 40;
    clearCanvas();
    for (var index = 0; index < circlesCount; index++) {
        circles[index].draw();
    }

    circles.sort(function (a, b) {
        if (a.depth > b.depth)
            return -1;
        if (a.depth < b.depth)
            return 1;
        return 0;
    });
}

var wormHoleIntervalID = -1;

function startWormHole() {
    if (wormHoleIntervalID > -1)
        clearInterval(wormHoleIntervalID);

    wormHoleIntervalID = setInterval(wormHole, 16);

    document.getElementById("wormHole").onclick = stopWormHole;
    document.getElementById("wormHole").innerHTML = "Standard Mode";
}

function stopWormHole() {
    if (wormHoleIntervalID > -1)
        clearInterval(wormHoleIntervalID);

    clearCanvas();
   
}

stopWormHole();



// Getting elements

var pad = document.getElementById("pad");
var ball = document.getElementById("ball");
var svg = document.getElementById("svgRoot");
var message = document.getElementById("message");

// Ball
var ballRadius = ball.r.baseVal.value;
var ballX;
var ballY;
var previousBallPosition = { x: 0, y: 0 };
var ballDirectionX;
var ballDirectionY;
var ballSpeed = 6;

// Pad
var pads=[];
window.pads=pads;
//var ppp=new JPad();
var padWidth = pad.width.baseVal.value;
var padHeight = pad.height.baseVal.value;
var padX;
var padY;
var padSpeed = 0;
var inertia = 0.80;


// Bricks
var bricks = [];
var destroyedBricksCount;
var brickWidth = 50;
var brickHeight = 20;
var bricksRows = 3;
var bricksCols = 20;
var bricksMargin = 15;
var bricksTop = 20;

// Misc.
var minX = ballRadius;
var minY = ballRadius;
var maxX;
var maxY;
var startDate;

// Brick function
function Brick(x, y) {
    var isDead = false;
    var position = { x: x, y: y };

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    svg.appendChild(rect);

    rect.setAttribute("width", brickWidth);
    rect.setAttribute("height", brickHeight);

    // Random green color
    var chars = "456789abcdef";
    var color = "";
    for (var i = 0; i < 2; i++) {
        var rnd = Math.floor(chars.length * Math.random());
        color += chars.charAt(rnd);
    }
    rect.setAttribute("fill",getRandomColor());

    this.drawAndCollide = function () {
        if (isDead)
            return;
        // Drawing
        rect.setAttribute("x", position.x);
        rect.setAttribute("y", position.y);

        // Collision
        if (ballX + ballRadius < position.x || ballX - ballRadius > position.x + brickWidth)
            return;

        if (ballY + ballRadius < position.y || ballY - ballRadius > position.y + brickHeight)
            return;

        // Dead
        this.remove();
        isDead = true;
        destroyedBricksCount++;

        // Updating ball
        ballX = previousBallPosition.x;
        ballY = previousBallPosition.y;

        ballDirectionY *= -1.0;
    };

    // Killing a brick
    this.remove = function () {
        if (isDead)
            return;
        svg.removeChild(rect);
    };
}

// Collisions
function collideWithWindow() {
    if (ballX < minX) {
        ballX = minX;
        ballDirectionX *= -1.0;
    }
    else if (ballX > maxX) {
        ballX = maxX;
        ballDirectionX *= -1.0;
    }

    if (ballY < minY) {
        ballY = minY;
        ballDirectionY *= -1.0;
    }
    else if (ballY > maxY) {
        ballY = maxY;
        ballDirectionY *= -1.0;
        lost();
    }
}

function collideWithPad() {
    if (ballX + ballRadius < padX || ballX - ballRadius > padX + padWidth)
        return;

    if (ballY + ballRadius < padY)
        return;

    ballX = previousBallPosition.x;
    ballY = previousBallPosition.y;
    ballDirectionY *= -1.0;

    var dist = ballX - (padX + padWidth / 2);

    ballDirectionX = 2.0 * dist / padWidth;

    var square = Math.sqrt(ballDirectionX * ballDirectionX + ballDirectionY * ballDirectionY);
    ballDirectionX /= square;
    ballDirectionY /= square;
}

function JPad(id){
var svgns = "http://www.w3.org/2000/svg";
var rec = document.createElementNS(svgns, 'rect');
        rec.setAttributeNS(null, 'x',window.innerWidth/2-125);
        rec.setAttributeNS(null, 'y',window.innerHeight - 160 - 40 - minY);
        rec.setAttributeNS(null, 'height', '15');
        rec.setAttributeNS(null, 'width', '250');
        rec.setAttributeNS(null, 'rx', 10);
        rec.setAttributeNS(null, 'ry', 20);
        document.getElementById('svgRoot').appendChild(rec);



    $(rec).css('fill',getRandomColor());
    $(rec).css('stroke','#FFF');
    $(rec).css('stroke-width',2);

pads.push(this);
var padWidth = rec.width.baseVal.value;
var padHeight = rec.height.baseVal.value;
var padX=rec.getAttribute('x');
var padY=rec.getAttribute('y');
var padSpeed = 0;
var inertia = 0.60;

var newText = document.createElementNS(svgns,"text");
newText.setAttributeNS(null,"x",rec.getAttribute('x'));     
newText.setAttributeNS(null,"y",rec.getAttribute('y')); 
newText.setAttributeNS(null,"font-size","10");

var textNode = document.createTextNode(id);
newText.appendChild(textNode);
document.getElementById("svgRoot").appendChild(newText);


this.rec=rec;
this.padSpeed=padSpeed;
// Pad movement

this.collideWithPad=function(){
   newText.setAttribute('x',rec.getAttribute('x'));
   newText.setAttribute('y',rec.getAttribute('y'));

  if (ballY + ballRadius < padY) {return;}
 if (ballX + ballRadius < padX || ballX - ballRadius > padX + padWidth){ return;}

       
  
       

    ballX = previousBallPosition.x;
    ballY = previousBallPosition.y;
    ballDirectionY *= -1.0;

    var dist = ballX - (padX + padWidth / 2);
    
    ballDirectionX = 2.0 * dist / padWidth;

    var square = Math.sqrt(ballDirectionX * ballDirectionX + ballDirectionY * ballDirectionY);
    ballDirectionX /= square;
    ballDirectionY /= square;


     if (ballX + ballRadius < rec.getAttribute('x') || ballX - ballRadius > rec.getAttribute('x') + padWidth)
       console.log("1X")
        return;

    if (ballY + ballRadius < padY)
        console.log("1Y")
        return;

    ballX = previousBallPosition.x;
    ballY = previousBallPosition.y;
    ballDirectionY *= -1.0;

    var dist = ballX - (rec.getAttribute('x') + padWidth / 2);

    ballDirectionX = 2.0 * dist / padWidth;

    var square = Math.sqrt(ballDirectionX * ballDirectionX + ballDirectionY * ballDirectionY);
    ballDirectionX /= square;
    ballDirectionY /= square;
console.log("0")
}

this.checkWindow =function(){
    maxX = window.innerWidth - minX;
    maxY = window.innerHeight - 160 - 40 - minY;
    padY = maxY - 30;

}
this.movePad=function () {
    padX += this.padSpeed;
    this.padSpeed *= inertia;

    if (padX < minX)
        padX = minX;

    if (padX + padWidth > maxX)
        padX = maxX - padWidth;
    padX=Math.round(padX);
    rec.setAttribute("x", padX);
    rec.setAttribute("y", padY);

}
}


// Pad movement
function movePad() {
    padX += padSpeed;

    padSpeed *= inertia;

    if (padX < minX)
        padX = minX;

    if (padX + padWidth > maxX)
        padX = maxX - padWidth;
}

registerMouseMove(document.getElementById("gameZone"), function (posx, posy, previousX, previousY) {
    padSpeed += (posx - previousX) * 0.2;
});

window.addEventListener('keydown', function (evt) {
    switch (evt.keyCode) {
        // Left arrow
        case 37:
            padSpeed -= 10;
            break;
        // Right arrow   
        case 39:
            padSpeed += 10;
            break;
    }
}, true);

function checkWindow() {
    maxX = window.innerWidth - minX;
    maxY = window.innerHeight - 130 - 40 - minY;
    padY = maxY - 30;
}

function gameLoop() {
 for (var index = 0; index < pads.length; index++) {
     pads[index].movePad();
     pads[index].collideWithPad();
    // collideWithPad
    }
    movePad();

    // Movements
    previousBallPosition.x = ballX;
    previousBallPosition.y = ballY;
    ballX += ballDirectionX * ballSpeed;
    ballY += ballDirectionY * ballSpeed;

    // Collisions
    collideWithWindow();
    collideWithPad();

    // Bricks
    for (var index = 0; index < bricks.length; index++) {
        bricks[index].drawAndCollide();
    }

    // Ball
   try {
    if(!isNaN(ballX))
     ball.setAttribute("cx", ballX);
}
catch(err) {
    console.log(ballX);
};
   try {
     if(!isNaN(ballY))
     ball.setAttribute("cy", ballY);
}
catch(err) {
     console.log(ballY);
};

   
  

    // Pad
    pad.setAttribute("x", padX);
    pad.setAttribute("y", padY);
    
    // Victory ?
    if (destroyedBricksCount == bricks.length) {
        win();
    }
    if(ballY==maxY){
       ballY += ballDirectionY * ballSpeed;
    }
}

function generateBricks() {
    // Removing previous ones
    for (var index = 0; index < bricks.length; index++) {
        bricks[index].remove();
    }

    // Creating new ones
    var brickID = 0;

    var offset = (window.innerWidth - bricksCols * (brickWidth + bricksMargin)) / 2.0;

    for (var x = 0; x < bricksCols; x++) {
        for (var y = 0; y < bricksRows; y++) {
            bricks[brickID++] = new Brick(offset + x * (brickWidth + bricksMargin), y * (brickHeight + bricksMargin) + bricksTop);
        }
    }
}

var gameIntervalID = -1;
function lost() {
   // clearInterval(gameIntervalID);
   // gameIntervalID = -1;
   // startGame();
    //message.innerHTML = "Game over !";
    //message.style.visibility = "visible";
}

function win() {
    clearInterval(gameIntervalID);
    gameIntervalID = -1;

    var end = (new Date).getTime();

    message.innerHTML = "Victory ! (" + Math.round((end - startDate) / 1000) + "s)";
    message.style.visibility = "visible"; 
}

function initGame() {
    message.style.visibility = "hidden";
for (var index = 0; index < pads.length; index++) {
     pads[index].checkWindow();
    }
    checkWindow();
    
    padX = (window.innerWidth - padWidth) / 2.0;

    ballX = window.innerWidth / 2.0;
    ballY = maxY - 60;

    previousBallPosition.x = ballX;
    previousBallPosition.y = ballY;
    
    padSpeed = 0;

    ballDirectionX = Math.random();
    ballDirectionY = -1.0;

    generateBricks();
    gameLoop();
}

function startGame() {
    initGame();

    destroyedBricksCount = 0;

    if (gameIntervalID > -1)
        clearInterval(gameIntervalID);

    startDate = (new Date()).getTime(); ;
    gameIntervalID = setInterval(gameLoop, 16);
}

document.getElementById("newGame").onclick = startGame;
window.onresize = initGame;

initGame();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addUser(id){
 var user=new JPad(id);
 user.name=id;
 console.log(user);
}
function controlUser(id,val){
var u = $.grep(pads, function(o){ return o.name == id; });
if(u.length>0){u[0].padSpeed=Math.round(val);}
console.log(u[0]);


};


module.exports = {
    startGame:function(){startGame();},
    addUser:function(id){addUser(id);},
    control:function(id,val){controlUser(id,val);}

};

