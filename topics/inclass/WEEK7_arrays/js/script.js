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
function setup() {
    createCanvas(500,500);

}
let square = {
    x:200,
    y:100
}

let squareSecond = {
    x:100,
    y:100
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    drawSquare(100,100);
    drawSquareTwo(square);
    drawSquareTwo(squareSecond);
}
function drawSquare(x1,y){
    push ();
    fill (255,0,255);
    rect(x1,y,40,40);
    pop ();
}
function drawSquareTwo(tempSquare){
    push ();
    fill(255,0,255);
    rect(tempSquare.x,tempSquare.y, 40,40);
    pop ();
}