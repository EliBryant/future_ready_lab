//define an object that describes a circle
/*var circle = {
    diameter: 80,
    xCoor: 320,
    yCoor: 180,
    color:[255,0,0],
    xSpeed: 10,
    ySpeed: 10
}
*/
function Ball(x,y,diameter, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = diameter;
    this.color = color || [0,0,0]; 
    this.xSpeed = xSpeed || 8;
    this.ySpeed  = ySpeed || 10;
}
function randomNumberOfBalls(){
    amountOfBalls = random([2,5,10,16]); 
    var ballList = [];
    for(var i = 0; i<amountOfBalls; i++){
        ballList.push(addRandomBall());
    }
    return ballList;  
}
function addRandomBall(){ //creates a random ball
    return new Ball (random(0,width),random(0,height), random (10,80),randomColor(), random(0,10), random(0,10));
}
//the balls change to a random color when the balls bounce
function randomColor() {
    return [random(0,255), random(0,255), random(0,255)];
}
//compares the sum of two radii to the distance between the centers of the two colliding balls
function ballsCollide (ball1, ball2){
    var radiiSum = (ball1.diameter + ball2.diameter)/2; 
    var distanceBetweenBalls = dist(ball1.xCoor,ball1.yCoor,ball2.xCoor,ball2.yCoor); 
    if(distanceBetweenBalls > radiiSum){ //If the distance between the balls is less than the sum of the balls' radii then they are colliding
        return false;
    }
    else{
        return true;
    }
}
function setup() {
    backgroundColor = randomColor(); //background is a random color everytime the page refreshes
    frameRate(20);
    ballList = randomNumberOfBalls();
    
    //allows user to create their own canvas size
    var width = (parseInt(prompt("Enter the width of the canvas.")));
    while (isNaN(width)|| width<=0){ // Ensures that they enter a valid number 
        width = parseInt(prompt("Enter a number for the width of your canvas that is greater than 0.")); 
    }
    var height = (parseInt(prompt("Type in the height for the canvas.")));
    while (isNaN(height) || height<=0){ // Ensures that they enter a valid number
        height = parseInt(prompt("Enter a number for the height of your canvas that is greater than 0."));
    }
    createCanvas(width, height);
}
function draw() {
    background(backgroundColor); // Hides the trail of balls
    for (var i =0; i < ballList.length; i++){
        fill(ballList[i].color);
        ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter) 
    // if the xCoor of circle is greater than the length of the canvas then bounce back
    //when circle bounces back, size changes
    if(ballList[i].xCoor > width || ballList[i].xCoor <0){
        ballList[i].diameter = random (10,80);
        ballList[i].color = randomColor();
        ballList[i].xSpeed = -ballList[i].xSpeed;
    }
    
    //if the yCoor of circle is greater than the width of the canvas, bounce back 
    //when circle bounces back, size changes
    if(ballList[i].yCoor > height || ballList[i].yCoor <0){
        ballList[i].diameter = random (10,80);
        ballList[i].color = randomColor();
        ballList[i].ySpeed = -ballList[i].ySpeed;
    }
        ballList[i].xCoor += ballList[i].xSpeed;
        ballList[i].yCoor += ballList[i].ySpeed;
    }
    
    //ball react to each other; elastic collision
    for(var j = 0; j < ballList.length; j++){ //j is basically the first ball used to detect a collision
        for(var k = j+1; k < ballList.length; k++){ //k is the second ball used to detect a collision
            var overlap = ballsCollide(ballList[j],ballList[k]);
            
            if(overlap){
                var leftBall = ballList[j]; //assuming that the first ball is on the left
                var rightBall = ballList[k]; //assuming second ball in on the right
                
                //variables are swapped if the placement of the "left ball" is to the right of the "right ball"
                //this allows the colliding balls to avoid "going through each other" if the balls are switched
                if(rightBall.xCoor < leftBall.xCoor){
                    leftBall = ballList[k];
                    rightBall = ballList[j];
                }
                
                //when the balls collide, the one on the right bounces back towards the right, the one on the left bounces towards the left    
                if(leftBall.xSpeed > 0){
                    leftBall.xSpeed = -leftBall.xSpeed;
                }
                
                if(rightBall.xSpeed < 0){
                    rightBall.xSpeed = -rightBall.xSpeed;
                }
                
                var highBall = ballList[j]; //assuming first ball is above the second ball
                var lowBall = ballList[k]; //assuming second ball is below the first ball
                
                //variables are swapped if the placement of the "higher ball" when it is lower than the "lower ball"
                //this allows the colliding balls to avoid "going through each other" if the balls are switched
                if(highBall.yCoor < lowBall.yCoor){
                    highBall = ballList[k];
                    lowBall = ballList[j];
                }
                
                //Allows higher ball to go up, lower ball to go down to make it seem as if tehy're bouncing off of each other
                if(highBall.ySpeed < 0){
                    highBall.ySpeed = -highBall.ySpeed;
                }
                
                if(lowBall.ySpeed > 0){
                    lowBall.ySpeed = -lowBall.ySpeed;
                }     
            }    
        } 
    }
}