//define an object that describe a circle
var circle = {
    diameter:80,
    xCoor:320,
    yCoor:240,
    color:[255,0,0],
    xSpeed:10,
    ySpeed:10,
}

//

function setup() {
    createCanvas(640, 480);
    background(210,255, 46)
    frameRate(20);
}
function randomColor() {
    return [random(0,255), random(0,255), random(0,255)];
}
//
function draw(){
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    if(circle.xCoor > 640){
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
    } else if(circle.xCoor < 0){
        circle.xSpeed = -circle.xSpeed;
        circle.color = randomColor();
    }
    if(circle.yCoor > 480){
        circle.diameter = random(10,70);
        circle.ySpeed = -circle.ySpeed;
    } else if(circle.yCoor < 0){
        circle.ySpeed = -circle.ySpeed;
        circle.color = randomColor();
    }
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}