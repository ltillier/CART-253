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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    frameRate(2);
    let heartSize=100;
    heartSize=heartSize+random(-1,1);
    ellipse(250,250,150,2*heartSize);
}