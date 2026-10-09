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
let colorLeft = 0
let colorRight = 222
//added variable to denote number of swatches
//ok so if i tack that on there it freaks out which is because 'width' is determined by canvas which comes after this is called
let swatchNumber = 3 //ok so this now works kind of 
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
    number:2,
    fill: {
        left:colorLeft,
        right:colorRight
    }

}
// let mix = {
//     a:lerpColor(colorLeft,colorRight,0.2),
//     b:lerpColor(colorLeft,colorRight,0.4),
//     c:lerpColor(colorLeft,colorRight,0.6)
// }
// let interA = lerpColor(colorLeft,colorRight,0.5);
/**
 * Ideally, this will draw the rectangles that make up the color palette - currently there's just one
*/

function draw() {
    //one rectangle, just to see what I'm doing for now
    fill(swatch.fill.left);
    rect(0,0,swatchWidth,swatch.h);
    //second rectangle
    fill(swatch.fill.right);
    rect(width-swatchWidth,0,swatchWidth,swatch.h);
    //3 more rectangles so i can set up my thingy (wait this should be a function)
    //testing out the lerpcolor thing i set up. not sure if the variable will work
    //its not working... not sure why
    fill(interA);
    rect(width/3,0,swatchWidth,swatch.h);
}

    /** Lotta comments here:
     * I'm trying to make it so that the number of rectangles is determined by 
     * how many times the user clicks but I worry that doing so is not possible
     * starting with 2 will allow me to set up a conditional that will change color
     * based on mouse click (and then maybe based on WHERE the mouse clicks?)
     * I need to make the x position of the swatch dependent on how many swatches there are
     * 
     * update: im gen so stuck, I think I'm going to work on something else for now because I don't really know how to proceed here :P
     */