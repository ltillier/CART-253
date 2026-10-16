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
let camera={

}

//sets up canvas size and angle mode
function setup() {
createCanvas(500,500);
//set angle mode for our aim thing
angleMode(DEGREES);
}


/**
 * draws a camera and makes it follow the mouse
*/
function draw() {
    background(0);
    //creating camera so I can make that rotate instead :P
    fill(255);
    //actual thing that rotates
    ellipse(100,100,50);
    //arms that hold camera
    rect(65,50,10,50);
    rect(125,50,10,50);
    //thing that arms attach to that attaches to wall or cieling or whatever
    rect(50,50,100,10);
    //other shape that makes it easier to see what camera is looking at
    rect(75,100,50,20);

    //variables so I can make it rotate well and also position it properly
    let cameraX=150;
    let cameraY=200;
    
    //angle between camera and mouse
    let cameraAngle = atan2(mouseY - cameraY, mouseX - cameraX);

    push();
    translate(cameraX, cameraY);
    fill(255);
    ellipse(0,0,50);
    rotate(cameraAngle);
    fill(255,0,0);
    ellipse(0,0,50);
    rect(0,-25,20,50);
    pop();


        // //PASTED CODE FROM AIM EXAMPLE
        //     // Draw left eye

        // let leftX = 150;
        // let leftY = 200;

        // // Calculate angle between left eye and mouse
        // let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

        // push();
        // translate(leftX, leftY);
        // fill(255);
        // ellipse(0, 0, 50, 50);
        // rotate(leftAngle);
        // fill(0);
        // ellipse(12.5, 0, 25, 25);
        // pop();
}