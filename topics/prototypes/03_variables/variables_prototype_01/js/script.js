/**
 * POV: you're a Seagull
 * Laurel Tillier
 * 
 * Watch a baby turtle slowly make its way to the sea :) 
 * I might add others at some point and make it into a real race, or find a way to add seagulls
 */

"use strict";

/**
 * set up variable for 'turtle' (object) and background colors, get a canvas, change angle mode to degrees
*/
//variables parking lot
//basic turtle :P note: this will be 'class' later, once I get the basic thing down. I want multiple turtles but for now I'll have 1
let turtle={
    x:50,
    y:50,
    size:20,
    fills:{
        shell:"#2a702a",
        body:"#64850b"
    }
}
//background colors
let sand="#dac9a5";
let water="#8eb1db"

function setup() {
createCanvas(500,200);
angleMode(DEGREES);

}


/**
 * Draws a beach, a little turtle, and makes it move towards the waves on the right side of the canvas
*/
function draw() {
    background(sand);
    drawTurtle();
    moveTurtle();
    waveOrientation();
}

//draws the turtle (what do you call a baby turtle?)
function drawTurtle(){
    push();
    //no lines here :) but we need them elsewhere so noStroke is contained to this function
    noStroke();
    //turtle body
    body();
    //turtle shell
    shell();
    eyes();
    pop();
}

//draws turtle shell
function shell(){
    //turtle shell:
        //turtle is green
        fill(turtle.fills.shell);
        //turtle is circle
        ellipse(turtle.x,turtle.y,turtle.size);
}

//draws turtle body parts underneath shell
function body(){
    //lets get the color right
    fill(turtle.fills.body);
        //declaring a variable to make turtle body parts easier to do
    let turtleR=turtle.size/2;

    //turtle head is also circle, and lighter green
        ellipse(turtle.x+turtleR,turtle.y,turtle.size/2.5);
    //turtles don't have legs they have flippers but idgaf
        //turtle legs
        //front
        ellipse(turtle.x+turtleR-5, turtle.y-turtleR, turtle.size/4, turtleR);
        ellipse(turtle.x+turtleR-5, turtle.y+turtleR, turtle.size/4, turtleR);
        //back
        ellipse(turtle.x-turtleR+5, turtle.y+turtleR-2, turtle.size/4, turtleR);
        ellipse(turtle.x-turtleR+5, turtle.y-turtleR+2, turtle.size/4, turtleR);
}

//gives the turtle little beady eyes
function eyes(){
    fill(0);
    let turtleX=turtle.x+turtle.size/2 + 2;
    let turtleY=turtle.size/9;
    ellipse(turtleX,turtle.y+turtleY,turtle.size/8);
    ellipse(turtleX,turtle.y-turtleY, turtle.size/8);
}

//moves the turtle
function moveTurtle(){
    //moves turtle to the right
    let turtleSpeed = noise(0.005*frameCount);
    //makes turtle slower as it moves to the right
    turtle.x=turtle.x+random(0,turtleSpeed);
    //adds movement along the y axis
    let turtleDriftDown = noise(0.005*frameCount);
    let turtleDriftUp = turtleDriftDown*-1;
    //makes turtle move either up or down at random
    turtle.y=turtle.y+random(turtleDriftUp,turtleDriftDown);
}

//creates a wave
function wave(){
    // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.002;

  // Iterate from top to bottom
  for (let y = 0; y < 200; y += 1) {
    // Scale the input coordinates.
    let ny = noiseScale * y;
    let nt = noiseScale * frameCount;

    // Compute the noise value.
    let x = noiseLevel * noise(ny, nt);

    //line color
    stroke(water);
    // Draw the line.
    line(0, y, x, y);
  }
}

//moves the wave to the right side of the canvas
function waveOrientation(){
    translate(width,height);
    rotate(180);
    wave();
}