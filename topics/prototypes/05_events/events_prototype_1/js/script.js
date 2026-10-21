/**
 * Drive A Manual Car
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * make canvas
*/
function setup() {
    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    manualTransmission();
    shifter();
}

//making line shape for the erm shifting like its the path that the thing takes
function manualTransmission(){
    push();
    stroke(255);
    noFill();
    strokeWeight(20);
    //only draw points
    beginShape(LINES);
    //the points
        
        //neutral
        vertex(100,200);
        vertex(300,200);
        //1st and 2nd
        vertex(100,100);
        vertex(100,300);
        //3rd and 4th
        vertex(200,100);
        vertex(200,300);
        //5th and 6th
        vertex(300,100);
        vertex(300,300);

    //END OF THE SHAPE
    endShape();
    pop();
}

//making the actual shifter i forget what it's called
function shifter(){
    fill(255);
    ellipse(100,200,50);
}