/**
 * Title of Project
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * notes for this:
 * crab should be more crablike
 * can i add back and forth without conditionals?
 * i want to add waves(noise??) that go over the crab maybe... or just waves in general lol
 * waves means iterations which means for which I DONT KNOW HOW TO DO YET
 * 
 * Ok it's going to be turtles instead lol
 * turtles all the way down
 * very long canvas(maybe only 100 or 200 tall but at least 500 long)
 * most of it is beachy (use noise for beach texture?)
 * one end (right side) is watery! (use example code for waves in noise example, yes that is iterating, yes you can figure it out)
 * since it's not the main code it's ok if its anachronistic :P
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//variables parking lot
//basic turtle :P note: this will be 'class' later, once I get the basic thing down. I want multiple turtles but for now I'll have 1
let turtle={
    x:50,
    y:50,
    size:50,
    fill:"#2a702a"
}

function setup() {
createCanvas(500,200);
angleMode(DEGREES);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    drawTurtle();
    moveTurtle();
    waveOrientation();
}

//function that draws the turtle (what do you call a baby turtle?)
function drawTurtle(){
    push();
    noStroke();
    fill(turtle.fill);
    ellipse(turtle.x,turtle.y,turtle.size);
    pop();
}
//function that moves the turtle to the right :)
function moveTurtle(){
    turtle.x = turtle.x+noise(0.0005*frameCount);
}

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
    stroke(0,0,255);
    // Draw the line.
    line(0, y, x, y);
  }
}
function waveOrientation(){
    translate(width,height);
    rotate(180);
    wave();
}