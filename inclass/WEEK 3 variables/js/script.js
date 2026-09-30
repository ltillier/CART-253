/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//variables parking lot
let ellipse_Size = 550;
let rect_Size = 10;
let color_Change = 255;

let sun = {
sunX:20,
sunY:50,
sunSize:50,
r :250,
g :150,
b :0,
}

let bird = {
    birdX:200,
    birdY:50,
    birdSize:20,
    r:0,
    g:0,
    b:255,
}

function setup() {
    createCanvas(500, 500,);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0,0,0);

fill (sun.r,sun.g,sun.b);
ellipse(sun.sunX,sun.sunY,sun.sunSize,sun.sunSize);

fill(bird.r,bird.g,bird.b);
ellipse(bird.birdX,bird.birdY,bird.birdSize);

bird.birdSize = bird.birdSize+.25;
bird.birdSize = constrain(bird.birdSize,0,width-100);

//fill(150,color_Change,color_Change);
//ellipse(250,250,ellipse_Size,ellipse_Size);
//fill(color_Change,100,color_Change);
//rect(rect_Size,rect_Size,rect_Size);

ellipse_Size = ellipse_Size-1;
rect_Size = rect_Size+.025;
color_Change = color_Change-0.25;
}