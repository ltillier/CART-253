/**
 * Test Project
 * Laurel Tillier
 * 
 * Consider me described :P
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

createCanvas(500, 500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0,0,0);
body_of_house();
fill(0,100,150);
strokeWeight(2);
ellipse(125, 125, 100, 100);
}

// this is a function to draw a house
function body_of_house() {
stroke(255,255,255);
strokeWeight(5);
fill(255,0,0);
rect(20, 20, 100, 100);

}