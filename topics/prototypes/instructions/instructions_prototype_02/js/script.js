/**
 * Title of Project
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);
noStroke();
}


/**
 * Draws a sunfish with functions
*/
function draw() {
background(0,0,0);
drawFish();
fishEye();
}

function drawFish() {
    rect(100,100,300,300,20,75,75,20);
    ellipse(300,250,100,450);

}
function fishEye() {
    push();
    fill(200,200,200);
    ellipse(175,200,25);
    fill(0,0,0);
    ellipse(177.5,200,20);
    pop();
}