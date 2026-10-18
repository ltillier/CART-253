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
    vertex(100,100);
    vertex(75,150);
    vertex(100,200);
    vertex(200,200);
    vertex(200,100);
    endShape();
    pop();
}