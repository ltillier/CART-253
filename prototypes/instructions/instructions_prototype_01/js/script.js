/**
 * horse
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! THIS PROJECT IS SO HORRENDOUSLY LATE!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * OR SHOW MERCY! YOUR CHOICE! IT WILL ONLY AFFECT HOW I SEE YOU FOREVER!
 * AHAHAH! NO PRESSURE! JUST KIDDING I GET IT! I STARTED THIS REALLY LATE!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
createCanvas(500,500);

}



/**
 * DESCRIBE
*/
function draw() {
//background
background(0,0,0);
//no strokes
noStroke();
//horse
drawHorse();
}
/**
 * Draws the horse using functions
 */
function drawHorse() {
    drawBody();
    drawHead();
    drawEye();
    drawFeatures();
    drawMouth();
}

/**
 * Draws horse body
 */
function drawBody() {
    //horse body
    push();
    fill(170);
    ellipse(200,450,350);
    //horse neck
    ellipse(200,270,180,300);
    triangle(50,425,120,200,200,450);
    pop();

}
/**
 * Draws horse head
 */
function drawHead() {
    //horse head
    push();
    fill(200);
    ellipse(240,150,180);
    //horse nose (this is part of the head if you think about it)
    ellipse(400,150,100);
    //connecting nose and head
    quad(240,60,400,100,400,180,240,220);
    pop();
}
/**
 * Draw horse eyes
 */
function drawEye () {
    //add eyeball
    push();
    fill(250);
    ellipse(275,100,25);
    //add eyelid
    fill(220);
    quad(290,85,265,100,285,115,200,100);
    pop();
}
/**
 * draws facial features of horse
 */
function drawFeatures () {
    //add nose
    push();
    fill(100);
    ellipse(420,120,15);
    triangle(420,120,405,112.5,420,112.5,)
    pop();
}