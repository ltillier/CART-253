/**
 * Drive A Manual Car
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * make canvas AND VARIABLES :P
*/
function setup() {
    createCanvas(500,500);

}
//variable for shifter knob
let shifter={
    x:100,
    y:200,
    size:50
}

//variable for gears, specifically neutral
let gear={
    neutral:{
        low:100,
        mid:200,
        high:300,
        y:200
    }
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    manualTransmission();
    gearStick();
    mouseDragged();
    shift();
}

//making line shape for the erm shifting like its the path that the thing takes
function manualTransmission(){
    push();
    stroke(255);
    noFill();
    strokeWeight(20);
    //only draw points
    beginShape(LINES);
    //the points
        
        //neutral
        vertex(gear.neutral.low,200);
        vertex(gear.neutral.high,200);
        //1st and 2nd
        vertex(100,100);
        vertex(100,300);
        //3rd and 4th
        vertex(200,100);
        vertex(200,300);
        //5th and 6th
        vertex(300,100);
        vertex(300,300);

    //END OF THE SHAPE
    endShape();
    pop();
}

//making the actual shifter i forget what it's called
function gearStick(){
    fill(255);
    ellipse(shifter.x,shifter.y,shifter.size);
}

// //making a function to change gearstick position based on what number is pressed
// function shift(){

// }


function mouseDragged(){
    if(shifter.y===200){
        if(mouseX>pmouseX){
            shifter.x+=10;
        }
        else if(mouseX<pmouseX){
            shifter.x-=10;
        }
    shifter.x=constrain(shifter.x,gear.neutral.low,gear.neutral.high);
    }
    else{
        shifter.x+=0;
    }
}

//function for moving gearstick up or down based on key presses
function shift(){

    //gear must be in 1 of 3 positions (x coordinates), lets define those
    let a=(gear.neutral.low-shifter.x);

    if(keyIsDown("Shift") && keyIsDown("1")===true){
        // if(a===0||a===-100||a===-200){
        //     if(keyPressed('1')){
                shifter.y=100;
        //     }
        // }
    }

}

// function keyPressed(){

// {
//     if (key==='1'){
//         shifter.y=100;
//     }
//     if (key==='2'){
//         shifter.y=300;
//     }
//     if (key==='n'){
//         shifter.y=200;
//     }
// }
// }
