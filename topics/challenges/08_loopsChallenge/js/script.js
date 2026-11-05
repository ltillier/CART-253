/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

//variables parking lot
let x = undefined;
let y = undefined;
let lineColor = undefined;
let lineWeight = undefined;


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    //defined variables
    x = 0;
    lineColor = 0;
    lineWeight = 1;

    while(x<width){

        //thing that happens
        stroke(lineColor);
        strokeWeight(lineWeight)
        line(x,0,x,height);

        //thing that changes
        lineColor+=25;
        x += 50;
        lineWeight += 1;

    }

    //defined variables
    y=0;
    lineColor=0;
    lineWeight = 1;

    //second loop
    while(y<height){
        //thing that happens
        stroke(lineColor);
        strokeWeight(lineWeight);
        line(0,y,width,y);

        //thing that changes
        lineColor += 25;
        lineWeight += 1;
        y += 50;
    }
    
}

