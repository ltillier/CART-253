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

//color vertical
let startColor1 = undefined;
let endColor1 = undefined;

//color horizontal
let startColor2 = undefined;
let endColor2 = undefined;

let gradientIndex = undefined;
let gradientColor = undefined;

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
    background(0);

    let startColor1 = color('#ff0000');
    let endColor1 = color('#6fff00');
    let startColor2 = color('#1e00ff');
    let endColor2 = color('#ff8000');


    //for loop (third loop)

    //defined variables
    x=0;
    lineColor=0;
    lineWeight=2;

    for(let x=0; x<width; x++){

        //thing that happens
        stroke(lineColor);
        strokeWeight(lineWeight);
        line(x,0,x,height);

        //thing that changes
        lineColor += 1;
        x += 1;
    }

    //vertical lines (red)

    //defined variables
    x = 0;
    lineWeight = 1;
    gradientIndex = 0;

    while(x<width){

        //color changing?
        let gradientColor = lerpColor(startColor1,endColor1,gradientIndex);
        //thing that happens
        stroke(gradientColor);
        strokeWeight(lineWeight)
        line(x,0,x,height);

        //thing that changes
        x += 50;
        lineWeight += 1;
        gradientIndex += 0.1;

    }
    //horizontal lines (blue)

    //defined variables
    y=0;
    lineWeight = 1;
    gradientIndex = 0;

    //second loop
    while(y<height){
        //color changing
        let gradientColor = lerpColor(startColor2,endColor2,gradientIndex);

        //thing that happens
        stroke(gradientColor);
        strokeWeight(lineWeight);
        line(0,y,width,y);

        //thing that changes
        lineWeight += 1;
        y += 50;
        gradientIndex += 0.1;
    }



    
}

