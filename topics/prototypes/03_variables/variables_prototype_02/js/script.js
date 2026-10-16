/**
 * POV:SURVEILLANCE
 * Laurel Tillier
 * 
 * using aim example (https://p5js.org/examples/Angles-And-Motion-Aim/) to make objects that 'look at' the user's mouse
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
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
        //PASTED CODE FROM AIM EXAMPLE
            // Draw left eye

        let leftX = 150;
        let leftY = 200;

        // Calculate angle between left eye and mouse
        let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

        push();
        translate(leftX, leftY);
        fill(255);
        ellipse(0, 0, 50, 50);
        rotate(leftAngle);
        fill(0);
        ellipse(12.5, 0, 25, 25);
        pop();
}