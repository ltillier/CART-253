/**
 * 
 * Laurel
 * 
 * I'm trying to make a gradient that will change color when you click it.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(1000,500);
noStroke();
background(50);  

//variables for the gradient

//start and end colors for gradient
let colorStart = color(255);
let colorEnd = color(0);

//there will be nine different values because i forgot how decimals work
//my block of lerps
let interA = lerpColor(colorStart,colorEnd,0.1);
let interB = lerpColor(colorStart,colorEnd,0.2);
let interC = lerpColor(colorStart,colorEnd,0.3);
let interD = lerpColor(colorStart,colorEnd,0.4);
let interE = lerpColor(colorStart,colorEnd,0.5);
let interF = lerpColor(colorStart,colorEnd,0.6);
let interG = lerpColor(colorStart,colorEnd,0.7);
let interH = lerpColor(colorStart,colorEnd,0.8);
let interI = lerpColor(colorStart,colorEnd,0.9);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}