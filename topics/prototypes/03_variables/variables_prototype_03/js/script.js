/**
 * POV:DOCTOR
 * Laurel Tillier
 * 
 * I'm going to make some kind of pulsing organ I think, and then I'll make screens that show some kind of 'info'
 * 
 */

"use strict";
    
//variables here:
let heart={
    color:(255,0,0),
    size:100
}

/**
 * creating a canvas
*/
function setup() {
createCanvas(500,500);
}

    

/**
 * Draws organ, makes it pulse based on mouse proximity, etc
*/
function draw() {
    background(0);
    frameRate(24);
    // //setting up an anxiety mechanic
    // let d = dist(mouseX,mouseY,width/2,height/2);
    // let a =(1200/d); 
    // console.log(a);
    // frameRate(a);

    fill(200,0,10);
    ellipse(250,250,heart.size);
    heartExpand();
    heartContract();
    // //screen displaying framerate as heartrate
    // push();
    // noFill();
    // stroke(255);
    // rect(400,400,100);
    // pop();
    // stroke(255);
    // fill(255);
    // text(ceil(a)*2,420,420);
}
//I have no internet so I cant really do commits the normal way, but I had an idea and wanted to test it
//unf
function heartBeat(){
    heartExpand();
    heartContract();
}

function heartExpand(){
    heart.size=heart.size+2;
}
function heartContract(){
    heart.size=heart.size-2;
}
console.log(heart.size);

//OK so I'm trying to set up a chain of functions to loop heartbeat, so it's a little more natural than 
//the random() value. I think it could be cool also if it works because my thought was "man, I can't loop without for or something"
//so it didn't work. :(
//The computes are happening at the same time afaik
//tried it with them in the same function, tried it with seperate functions, but unforch it doesn't work. I 
//wonder if there's other stuff I can try instead