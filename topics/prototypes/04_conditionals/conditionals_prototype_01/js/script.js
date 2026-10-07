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
let colorLeft = "#ff0000"
let colorRight = "#5eff00"
//added variable to denote number of swatches
//ok so if i tack that on there it freaks out which is because 'width' is determined by canvas which comes after this is called
let swatchNumber = 2 //ok so this now works kind of 
let swatchWidth = 1000/swatchNumber


function setup() {
createCanvas(1000,500);
noStroke();
background(50);  
}

//Moved this to below canvas to see if my idea for swatch size will work
    //didnt work when i tossed 'width' in. Trying to think of why
//added variable for swatch - maybe this should be a constant? 
let swatch = {
    w:100,  //ok so I keep forgetting commas, thats whats going wrong I assume
    h:500,
    fill: {
        left:colorLeft,
        right:colorRight
    }

}


/**
 * Ideally, this will draw the rectangles that make up the color palette - currently there's just one
*/

function draw() {
    //one rectangle, just to see what I'm doing for now
    fill(swatch.fill.left);
    rect(0,0,swatchWidth,swatch.h);
    //second rectangle
    /**
     * I'm trying to make it so that the number of rectangles is determined by 
     * how many times the user clicks but I worry that doing so is not possible
     * starting with 2 will allow me to set up a conditional that will change color
     * based on mouse click (and then maybe based on WHERE the mouse clicks?)
     * I need to make the x position of the swatch dependent on how many swatches there are
     * 
     */
    fill(swatch.fill.right);
    rect(500,0,swatchWidth,swatch.h);
}
