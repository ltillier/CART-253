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
background(100);
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
    drawMane();
}

/**
 * Draws horse body
 */
function drawBody() {
    //horse body
    push();
    fill("#522612");
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
    fill("#5f2e19");
    ellipse(240,150,180);
    //horse nose (this is part of the head if you think about it)
    ellipse(400,151,100);
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
    fill("#0c001a");
    ellipse(275,100,25);
    //add eyelid
    fill("#5f2e19");
    quad(290,85,265,100,285,115,200,100);
    pop();
}
/**
 * draws facial features of horse
 */
function drawFeatures () {
    //add nostril
    push();
    fill(0);
    ellipse(420,120,15);
    triangle(420,120,405,112.5,420,112.5,)
    pop();
    //add ears
    push();
    fill("#5f2e19");
    triangle(230,80,230,20,200,70);
    triangle(240,80,250,25,210,70);
    pop();
}
/**
 * draws horse mane
 */
function drawMane () {
    //add mane
    push();
    fill(0);
    quad(200,70,150,250,120,200,180,70);
    quad(180,70+20,130,250+20,100,200+20,160,70+20);
    quad(150,130,100,350,85,275,150,120);
    pop();
}