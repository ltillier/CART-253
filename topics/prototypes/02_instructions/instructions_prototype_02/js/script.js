/**
 * molamola
 * Laurel Tillier
 * 
 * behold the glory of the sunfish
 */

"use strict";

/**
 * Creates the canvas, removes lines(strokes),sets angle mode
*/
function setup() {
createCanvas(500,500);
angleMode(DEGREES);
}


/**
 * Draws a sunfish with functions
*/
function draw() {
background(0);
drawFish();
fishEye();
fishFin();
blush();
//i didn't realize you could change the cursor
cursor(HAND);
//fuck it we're in space now
planetRing();
drawPlanet();
//spaceship
drawShips();
}

//give this guy a fat fishy body
function drawFish() {
    push();
    fill("#fff200");
    stroke("#ff0000");
    ellipse(300,250,100,450);
    rect(100,100,300,300,20,75,75,20);
    pop();
}
//add fish eye so it sees us
function fishEye() {
    push();
    noStroke();
    fill(255);
    ellipse(175,235,25);
    fill(255,0,0);
    ellipse(177.5,235,20);
    pop();
}
//add fish fin for fishy
function fishFin() {
    push();
    noStroke();
    //fin shadow
    fill("#bd6d06");
    ellipse(255,270,70,45);
    //fin
    fill("#ffd000");
    ellipse(250,265,75,50);
    pop();
}
//the fish blushes! she's shy
function blush() {
    push();
    noStroke();
    fill("#f79d9d");
    ellipse(190,255,20,15);
    pop();
}
//trying to add a planet with a ring in the background
function drawPlanet() {
    push();
    noStroke();
    fill(100,100,150);
    ellipse(56,35,45);
    pop();
}
//the aforementioned ring
function planetRing() {
    push();
    noStroke();
    fill(250,200,250);
    rotate(-10);
    ellipse(50,50,100,50);
    fill(0,0,0);
    ellipse(49,47,80,40);
    pop();
} 
//maybe a little space ship?
function drawShips() {
    push();
    noStroke();
    fill(0,255,255);
    triangle(300,400,350,390,350,410);
    triangle(320,380,370,370,370,385);
    triangle(325,420,380,410,380,430);
    pop();
}