/**
 * POV:DOCTOR
 * Laurel Tillier
 * 
 * I'm going to make some kind of pulsing organ I think, and then I'll make screens that show some kind of 'info'
 * 
 */

"use strict";
    
/**
 * creating a canvas
*/
function setup() {
createCanvas(500,500);
}
    let heart={
        left:{
            x:100,
            y:250
        },
        right:{
            x:225,
            y:275
        }
    }
    

/**
 * Draws organ, makes it pulse based on mouse proximity, etc
*/
function draw() {
    background(0);

    //setting up an anxiety mechanic
    let d = dist(mouseX,mouseY,width/2,height/2);
    let a =(1200/d); 
    console.log(a);
    frameRate(a);

    // let heartSize=100;
    // heartSize=heartSize+random(-5,5);
    // fill(200,0,10);
    // ellipse(250,250,heartSize*1.5,2*heartSize);

    //trying to draw the heart properly now
    drawHeart();
    //testing heart pulse 
    heartBeat();
    //screen displaying framerate as heartrate
    push();
    noFill();
    stroke(255);
    rect(400,400,100);
    pop();
    stroke(255);
    fill(255);
    text(ceil(a)*2,420,420);
}
//function that draws the heart
function drawHeart(){
    //I think I need to fiddle around with what the heart looks like tbh
    push();
    noStroke();
    beginShape();
    //shape is going counter clockwise from top left point
    vertex(75,100);
    vertex(50,150);
    //left pulse
    vertex(heart.left.x,heart.left.y);

    vertex(150,300);
    vertex(200,300);
    //right pulse
    vertex(heart.right.x,heart.right.y);

    vertex(250,200);
    vertex(200,100);
    endShape();
    pop();
}
function heartBeat(){
    heart.left.x+=random(-5,5);
}