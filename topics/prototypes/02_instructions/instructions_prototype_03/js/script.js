/**Ever taught a horse to drive?
 * Laurel Tillier
 * 
 * Small iso experiment. slaps 2D this guy can fit so much bad 3D inside it
 * This car is small and has a cool orange windshield. 
 * it's not very detailed yet though
 */

"use strict";

/**
 * Made the canvas, removed fill from shapes
*/
function setup() {
createCanvas(500,500);
// noFill();
noStroke();
angleMode(DEGREES);
}


/**
 * draw a very very simple car with functions (also give it a road)
*/
function draw() {
    background(100);
    //car is now more centred on canvas(not like, perfectly but good enough)
    translate(0,100);
    carTop();
    carSide();
    carFront();
    windShield();
}


function windShield(){
    //draws windshield and makes it transparent ish
    push();
    stroke(255,255,255,50);
    fill(255,150,0,100);
    quad(250,50,300,100,150,150,100,100);
    triangle(150,150,300,150,300,100);
    push();
    translate(-50,-50);
    triangle(150,150,300,150,300,100);
    pop();
    pop();
}
function carFront(){
    //front of car (previously, 'side')
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
}
function carSide(){
    //front
    // rect(150,100,300,100);
    // rect(150,150,300,50);
    // rect(300,100,100);
    //making more complex shape for the car
    push();
    //background car body
    push();
    fill(10);
    translate(-50,-50);
    beginShape();
    vertex(150,150);
    vertex(150,200);
    vertex(450,200);
    vertex(450,150);
    vertex(400,100);
    vertex(300,100);
    vertex(300,150);
    vertex(150,150);
    endShape();
    pop();
    fill(20);
    //car body
    beginShape();
    vertex(150,150);
    vertex(150,200);
    vertex(450,200);
    //car rear (maybe add detail here?)
    vertex(450,150);
    vertex(400,100);
    vertex(300,100);
    vertex(300,150);
    vertex(150,150);
    endShape();
    fill(255);
    rect(150,160,10,20);

    //car wheels
    fill(50);
    push();
    translate(-2.5,-2.5);
    circle(225,200,50);
    circle(400,200,50);
    pop();
    circle(225,200,50);
    circle(400,200,50);
    fill(75);
    circle(225,200,30);
    circle(400,200,30);
    pop();
}
function carTop(){
    push(); 
    fill(20);
    translate(-100,0);
    shearX(45);
    // rect(150,50,300,50);
    rect(300,50,100,50);
    // rect(150,50,150,50);
    pop();
}