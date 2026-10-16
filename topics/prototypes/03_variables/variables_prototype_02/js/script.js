/**
 * POV:SURVEILLANCE
 * Laurel Tillier
 * 
 * using aim example (https://p5js.org/examples/Angles-And-Motion-Aim/) to make objects that 'look at' the user's mouse
 * 
 */

"use strict";

/**
 * Sets up canvas and variables
*/
//variables parking lot
let camera={

}

//sets up canvas size and angle mode
function setup() {
createCanvas(500,500);
//set angle mode for our aim thing
angleMode(DEGREES);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    //creating camera so I can make that rotate instead :P
    fill(255);
    rect(50,50,100,50);
    rect(50,50,110,25,0,0,15,0);
    ellipse(75,100,25);
    rect(10,110,75,20);
    rect(0,50,25,100);
        // //PASTED CODE FROM AIM EXAMPLE
        //     // Draw left eye

        // let leftX = 150;
        // let leftY = 200;

        // // Calculate angle between left eye and mouse
        // let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

        // push();
        // translate(leftX, leftY);
        // fill(255);
        // ellipse(0, 0, 50, 50);
        // rotate(leftAngle);
        // fill(0);
        // ellipse(12.5, 0, 25, 25);
        // pop();
}