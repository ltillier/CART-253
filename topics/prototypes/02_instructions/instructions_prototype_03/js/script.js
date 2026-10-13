/**
 * All Lines No Fill
 * Laurel Tillier
 * 
 * I'm going to try to make a drawing that's all lines, no fill
 * this has got to be one of the worst things I've made ever, but at this point I really don't know what to do about it
 * I can spend more time working on something that I wont like that will not help my grade at all (considering how late it is)
 * or I can give up (GIVE UP) and move on to other things that will also be bad and not get good grades. whatever
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(100,100);
noFill();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    stroke(255);
    //change stroke connection style
    strokeJoin(ROUND);
    //change stroke weight so it's smaller
    strokeWeight(0.25);
    //scale the points
    scale(3);
    //move points
    translate(-40,-34.5);
    //starting points
    startingPoints();
    //cross
    startingCross();
    //first connection
    firstConnection();
    //second connection
    secondConnection();
    //third connection
    thirdConnection();
    //fourth connection
    fourthConnection();

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
    stroke(255,255,0);
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
    stroke(255,0,0);
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
    stroke(0,255,0);
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
    stroke(0,0,255);
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