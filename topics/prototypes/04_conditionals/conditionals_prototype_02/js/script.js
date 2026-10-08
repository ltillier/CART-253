/**
 * Title of Project
 * Laurel Tillier
 * 
 * Goal is to make a 'game' of sorts where the mouseobject 'herds' objects
 * to a specific point or goal
 */

"use strict";
/**
 * Lets make our critters
 */
//first I'm getting a basic idea of the 'herder' (mouse object)
let herder = {
    x:undefined,
    y:undefined,
    size:25,
    fill:0
}

//I'm going to try and add a 'bark' (from the bark sound effect)
let beat;

//I'm going to try to use 'class' to make the sheeps more sheepy
class Sheep {
    constructor(x,y,size) {
        //im copying from the p5js reference page, this code runs once when an instance is created
        this.x = x;
        this.y = y;
        this.size = size;
    }
    show() {
        //this code runs once when mySheep.show() is called.
        fill(255);
        ellipse(this.x,this.y,this.size);
    }
}
//ok now that Sheep is a class, I'm going to try and create a sheep (IT WORKS)
let sheep1 = new Sheep(100,100,50);
let lamb = new Sheep (200,200,20);
/**
 * make a beautiful pasture for our critters
*/
function setup() {
    createCanvas(500,500);
    // lines are scary! get rid of them
    noStroke();

}

//this is also part of the bark thing I'm trying
beat = createAudio(/assets/bark.wav);

function mousePressed(){
    beat.play();
}


/**
 * Draw the beautiful pasture with functions
*/
function draw() {
    background(0,150,0);
    drawHerder();
    //show sheep
    sheep1.show();
    lamb.show();

}
//draws the herder
function drawHerder(){
    push();
    fill(herder.fill);
    ellipse(mouseX,mouseY,herder.size);
    pop();
}
//draws the sheep or whatever is being herded
function drawSheep(){
    push();
    fill()
}
