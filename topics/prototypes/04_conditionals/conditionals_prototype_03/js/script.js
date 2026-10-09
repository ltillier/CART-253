/**
 * Fish
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas, gets rid of lines
*/
function setup() {
    createCanvas(1000,1000);
    noStroke();

}

const fish={
    x:400,
    y:400,
    w:300,
    h:200,
    r:70,
    speedx:2,
    speedy:2,
    fill:255,
    fills:{
        body:222,
        fin:100,
        eye:255,
        pupil:0
    }
}

/**
 * Draws the fishy fishy fishes with functions
*/
function draw() {
    //watery background for the fishes
    background(150,200,250);
    drawFish();
    moveFish();
    hitEdge();
}
//constrains fish to canvas with conditionals
function hitEdge(){
    if(fish.x>width-fish.w){
        fish.speedx=-2
    }
    else if(fish.x<0){
        fish.speedx=2
    }
    if(fish.y>height-fish.h){
        fish.speedy=-2
    }
    else if(fish.y<0){
        fish.speedy=2
    }
}
function moveFish(){
    fish.x = fish.x+fish.speedx
    fish.y = fish.y+fish.speedy
}
function drawFish(){
    drawBody();
    drawEye();
}
function drawBody(){
    fill(fish.fills.body);
    rect(fish.x,fish.y,fish.w,fish.h,fish.r);
}
function drawEye(){
    fill(fish.fills.eye);
    ellipse(fish.x+50,fish.y+75,50);
    fill(fish.fills.pupil);
    ellipse(fish.x+50,fish.y+75,30);
}
    //draws the fish
    fill(250,100,100);
    rect(400,400,300,200,70);
    //fish eye
    fill(255);
    ellipse(450,475,50);
    //fish pupil
    fill(0);
    ellipse(450,475,30);
    //fish tail
    fill(255,150,50);
    rect(700,400,100,250,50,20,20,50);
    //fish fin
    fill(255,150,50);
    rect(500,520,50,30,5,5,5,20);
    //dorsal fin
    fill(255,150,50);
    rect(500,350,100,50,25,25,0,0);