/**
 * POV:SURVEILLANCE
 * Laurel Tillier
 * 
 * using aim example (https://p5js.org/examples/Angles-And-Motion-Aim/) to make objects that 'look at' the user's mouse
 * 
 */

"use strict";

/**
 * Sets up canvas and variables
*/
//variables parking lot
let spotLight={
    x:250,
    y:50,
    size:50
}

//sets up canvas size and angle mode
function setup() {
createCanvas(500,500);
//set angle mode for our aim thing
angleMode(DEGREES);
}


/**
 * draws a spotlight and makes it follow the mouse
*/
function draw() {
    background(0);
    //function that draws the spotlight
    drawSpotLight();
    //function that draws the bracket
    drawBracket();
}

//function that draws main part of spotlight
function drawSpotLight(){
    let spotLightAngle = atan2(mouseY - spotLight.y, mouseX - spotLight.x);

    push();
    noStroke();
    //moves it from origin
    translate(spotLight.x, spotLight.y);
    //basic spotlight color
    fill(150);
    //basic circle
    ellipse(0,0,spotLight.size);
    //rotates it based on mouse position
    rotate(spotLightAngle);
    //light color
    fill(255,255,0);
    //light diffused thru canvas
    quad(20,-10,20,10,500,100,500,-100);
    //light origin
    ellipse(20,0,spotLight.size/5,spotLight.size/1.75);
    //basic spotlight color
    fill(150);
    rect(0,0-spotLight.size/2,20,50);
    pop();
}

//function that draws spotlight bracket
function drawBracket(){
    let bracketX=width/2-spotLight.size/2;
    let bracketW=10;

    push();
    noStroke();
    fill(150);
    rect(bracketX,0,spotLight.size,20);
    fill(200);
    rect(width/2-bracketW/2,0,bracketW,50,0,0,5,5);
    fill(100);
    ellipse(250,45,5);
    pop();
}