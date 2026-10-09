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
//fish object
const fish={
    x:400,
    y:400,
    w:300,
    h:200,
    r:70,
    speedx:-2,
    speedy:2,
    fill:255,
    fills:{
        body:"#ff5100",
        fin:"#ff8800",
        eye:"#ffffff",
        pupil:"#00001a"
    }
}
//food object
const food={
    x:100,
    y:100,
    size:20,
    fill:"#a16c2e",
    speed:0.5
}


/**
 * Draws the fishy fishy fishes with functions
*/
function draw() {
    //watery background for the fish
    background(150,200,250);
    //draws the objects
    drawFish();
    drawFood();
    //moves the objects
    moveFish();
    moveFood();
    //changes behavior based on certain conditions
    hitEdge();
    eatFood();
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
    if(food.y>height){
        food.x=random(0,1000);
        food.y=random(0,100);
    }
}
//moves fish according to variable for fish speed
function moveFish(){
    fish.x = fish.x+fish.speedx;
    fish.y = fish.y+fish.speedy;
}
//draws the fish based on functions for specific features
function drawFish(){
    drawBody();
    drawEye();
    drawFins();
}
//draws the fish's body
function drawBody(){
    fill(fish.fills.body);
    rect(fish.x,fish.y,fish.w,fish.h,fish.r);
}
//draws the fish's eye
function drawEye(){
    //fish eye
    fill(fish.fills.eye);
    ellipse(fish.x+50,fish.y+75,50);
    //fish pupil
    fill(fish.fills.pupil);
    ellipse(fish.x+50,fish.y+75,30);
}
//draws the fish's fins
function drawFins(){
    fill(fish.fills.fin);
    //fish tail
    rect(fish.x+fish.w,fish.y,100,250,50,20,20,50);
    //fish fin
    rect(fish.x+fish.w/3,fish.y+fish.h/1.75,50,30,5,5,5,20);
    //fish dorsal fin
    rect(fish.x+fish.w/3,fish.y-fish.h/4,100,fish.h/4,25,25,0,0);
}
//draws food
function drawFood(){
    fill(food.fill);
    ellipse(food.x,food.y,food.size);
}
//moves food based on food speed variable
function moveFood(){
    //food only moves down
    food.y=food.y+food.speed;
}

//when the fish is near food, the food vanishes
//conditional to make fish 'eat' food and grow bigger
function eatFood(){
    let d=dist(food.x,food.y,fish.x,fish.y+fish.h/2);
    let near=(d<food.size/2+fish.h/4);
    console.log(near);
    if(near){
        food.x=random(0,1000);
        food.y=random(0,100);
        fish.w=fish.w+25;
        fish.h=fish.h+25;
    }
}