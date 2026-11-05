/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
/**
 * VARIABLES PARKING LOT
 */

let startColor = undefined;
let endColor = undefined;

let gradientIndex = undefined;

let swatch ={
    x:0,
    y:0,
    size:5
}

let y = undefined;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
 createCanvas(500,500);
    startColor = color(255,255,0);
    endColor = color(0,255,0);
    noStroke();
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(200);

    gradientIndex = 0;
    y=0;
while(gradientIndex<1){
    let rectColor = lerpColor(startColor,endColor,gradientIndex);
    fill(rectColor);
    rect(0,y,width,2);
    gradientIndex += 0.004;
    y+=2;

}

}


//nothing will be drawn unless you finish the while - there needs to be an end condition for the loop

