/**
 * All Lines No Fill
 * Laurel Tillier
 * 
 * I'm going to try to make a drawing that's all lines, no fill
 * I'm redoing the whole thing because I wasn't happy with it
 * this reminds me of block printing
 */

"use strict";

/**
 * Made the canvas, removed fill from shapes
*/
function setup() {
createCanvas(500,500);
// noFill();
angleMode(DEGREES);
}


/**
 * made a  background etc
*/
function draw() {
    background(100);
    stroke(0);
    translate(0,100);
    //small iso experiment
    // top
    push(); 
    fill(20);
    translate(-100,0);
    shearX(45);
    // rect(150,50,300,50);
    rect(300,50,100,50);
    // rect(150,50,150,50);
    pop();
    //front
    // rect(150,100,300,100);
    // rect(150,150,300,50);
    // rect(300,100,100);
    //making more complex shape for the car
    push();
    fill(20);
    //car body
    beginShape();
    vertex(150,150);
    vertex(150,200);
    vertex(450,200);
    vertex(450,150);
    vertex(400,100);
    vertex(300,100);
    vertex(150,150);
    endShape();
    //car wheels
    fill(50);
    circle(225,200,50);
    circle(400,200,50);
    pop();
    //side
    push();
    fill(20);
    translate(0,-150);
    shearY(45);
    // rect(100,100,50,100);
    rect(100,150,50);
    fill(255);
    rect(100,160,20);
    rect(130,160,20);
    pop();
    //windshield
    push();
    fill(255,150,0,100);
    quad(250,50,300,100,150,150,100,100);
    pop();

    // //change stroke connection style
    // strokeJoin(ROUND);
    // //change stroke weight so it's smaller
    // // strokeWeight(0.25);
    // //scale the points
    // //scale(3);
    // //move points
    // // translate(-40,-34.5);
    // //starting points
    // startingPoints();
    // //cross
    // startingCross();
    // //first connection
    // firstConnection();
    // //second connection
    // secondConnection();
    // //third connection
    // thirdConnection();
    // //fourth connection
    // fourthConnection();

}

function startingPoints(){
    //origin
    point(50,50);
    //southeast
    point(54,54);
    //northwest
    point(46,46);
    //northeast
    point(54,46);
    //southwest
    point(46,54);
}
function startingCross(){
    line(50,45,50,55);
    line(45,50,55,50);
}
function firstConnection(){
    //connection 1 
    stroke(255);
    beginShape();
    vertex(55,50);
    vertex(55,52);
    vertex(52,52);
    vertex(52,56);
    vertex(59,56);
    vertex(59,46);
    vertex(54,46);
    endShape();

}
function secondConnection(){
    //connection 2
    stroke(255);
    beginShape();
    vertex(50,55);
    vertex(50,58);
    vertex(61,58);
    vertex(61,44);
    vertex(52,44);
    vertex(52,48);
    vertex(57,48);
    vertex(57,54);
    vertex(54,54);
    endShape();
}
function thirdConnection(){
    //connection 3
    stroke(255);
    beginShape();
    vertex(50,45);
    vertex(50,42);
    vertex(63,42);
    vertex(63,60);
    vertex(48,60);
    vertex(48,52);
    vertex(44,52);
    vertex(44,64);
    vertex(67,64);
    vertex(67,38);
    vertex(46,38);
    vertex(46,46);
    endShape();
}
function fourthConnection(){
    //connection 4
    stroke(255);
    beginShape();
    vertex(46,54);
    vertex(46,62);
    vertex(65,62);
    vertex(65,40);
    vertex(48,40);
    vertex(48,48);
    vertex(44,48);
    vertex(44,36);
    vertex(69,36);
    vertex(69,66);
    vertex(42,66);
    vertex(42,50);
    vertex(45,50);
    endShape();
}