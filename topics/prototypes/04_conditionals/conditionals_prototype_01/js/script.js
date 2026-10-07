/**
 * Reactive Gradient
 * Laurel
 * 
 * I'm trying to make a gradient that will change color when you click it.
 */

"use strict";

/**
 * Adding a bunch of variables + also creating the canvas
*/
//added test color to see if i could make variable variable-er (note:it was successful!)
let colorTest = "#ff0000"

//added variable for swatch - maybe this should be a constant? 
let swatch = {
    w:100,
    h:500,
    fill: {
        left:colorTest,
        right:255
    }

}


function setup() {
createCanvas(1000,500);
noStroke();
background(50);  
}

/**
 * Ideally, this will draw the rectangles that make up the color palette - currently there's just one
*/

function draw() {
    //one rectangle, just to see what I'm doing for now
    fill(swatch.fill.left);
    rect(0,0,swatch.w,swatch.h);
}
