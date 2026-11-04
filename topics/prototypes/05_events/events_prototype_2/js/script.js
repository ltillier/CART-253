/**
 * Bomb Defuser
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//variables parking lot


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);
        background(0);
    wires();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    wireCover();

}

function wireCover(){
    push();
    noFill();
    stroke(255);
    rect(0,0,200,200,5);
    pop();
}

//makes the wires - randomly?
function wires(){
    //wires should be wirey
    push();
    noFill();
    stroke(255);
    strokeWeight(10);
    //wire position should be random, maybe?
    let wireBottom = random(10,190);
    let wireBottom2 = random(10,190);
    let wireBottom3 = random(10,190);
    let wireBottom4 = random(10,190);
    let wireBottom5 = random(10,190);

    //now for the wires
    //red
    stroke(255,0,0);
    spline(50,0,60,20,50,50,wireBottom,200);
    //green
    stroke(0,255,0);
    spline(100,0,120,20,100,100,wireBottom2,200);
    //blue
    stroke(0,0,255);
    spline(150,0,150,10,150,100,wireBottom3,200);
    pop();
}

//if you click on the wire something happens
function mouseClicked(){
//ok first up, whats a wire
    let d=dist()
}