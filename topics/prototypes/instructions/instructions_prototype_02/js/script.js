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
fishFin();
blush();
}

//give this guy a fat fishy body
function drawFish() {
    rect(100,100,300,300,20,75,75,20);
    ellipse(300,250,100,450);

}
//add fish eye so it sees us
function fishEye() {
    push();
    fill(200,200,200);
    ellipse(175,235,25);
    fill(0,0,0);
    ellipse(177.5,235,20);
    pop();
}
//add fish fin for fishy
function fishFin() {
    push();
    //fin shadow
    fill(50,50,50);
    ellipse(255,270,70,45);
    //fin
    fill(200,200,200);
    ellipse(250,265,75,50);
    pop();
}
function blush() {
    push();
    fill(250,200,200);
    ellipse(190,255,20,15);
    pop();
}