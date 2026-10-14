/**
 * Title of Project
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * notes for this:
 * crab should be more crablike
 * can i add back and forth without conditionals?
 * i want to add waves(noise??) that go over the crab maybe... or just waves in general lol
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//variables parking lot
let crab={
    x:50,
    y:50,
    size:50,
    speedx:1,
    speedy:0.5,
    fill:"#ffffff"
}
function setup() {
createCanvas(500,200);
noStroke();

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
drawCrab();
moveCrab();
}

function drawCrab(){
    fill(crab.fill);
    ellipse(crab.x, crab.y, crab.size);
}
function moveCrab(){
    crab.x=crab.x+crab.speedx;
    crab.y=crab.y+crab.speedy;
    crab.x=constrain(crab.x,0,width-50);
    crab.y=constrain(crab.y,0,height-50);
}
