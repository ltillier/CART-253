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
    drawEyes();
    drawOrifice();
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
    ellipse(240,150,175);
    //horse nose (this is part of the head if you think about it)
    ellipse(400,100,100);
    pop();

}
