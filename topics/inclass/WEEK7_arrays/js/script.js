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

let arrayExample = [1,3,5,7,9,11,13,15,17];
let array_of_squares = [];

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    // // //length
    // // console.log(arrayExample.length)//DO NOT FORGET!!!
    // // console.log(arrayExample[8]);
    // arrayExample[3] =21
    // console.log(arrayExample[3])
    drawSquare(array_of_squares[0]);

}

function mousePressed(){
    array_of_squares.push(createSquare(mouseX,mouseY))
}

function createSquare(tempX, tempY){
    let tempSquare = {
        x: tempX,
        y: tempY,
        w:50,
        h:50
    }
    return tempSquare;
}

function drawSquare(tempSquare){
    push ();
    fill(255,0,255);
    rect(tempSquare.x, tempSquare.y, tempSquare.w, tempSquare.h);
    pop ();
}

/**
 * class notes:
 *  you can give the variable/array name and it will output the whole list in console.log #the more you know
 * you can put holes in your array #woke (if you assign a spot on the array a value without doing the earlier spots)
 * ok sabine says don't do that
 * learning about strings
 * a string
 * "factory functions"
 */