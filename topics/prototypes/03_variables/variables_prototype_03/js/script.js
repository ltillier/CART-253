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
    let a =(2400/d); 
    console.log(a);
    frameRate(a);

    let heartSize=100;
    heartSize=heartSize+random(-10,10);
    ellipse(250,250,150,2*heartSize);
}