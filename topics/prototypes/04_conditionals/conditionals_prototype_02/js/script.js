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

//I'm going to try to use 'class' to make the sheeps more sheepy
class Sheep {
    constructor(x,y,size) {
        //im copying from the p5js reference page, this code runs once when an instance is created
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = 255;
    }
    show() {
        //this code runs once when mySheep.show() is called.
        fill(this.fill);
        ellipse(this.x,this.y,this.size);
        //added little sheepy heads for our sheeps
        fill(0);
        ellipse(this.x-this.size/2,this.y,this.size/4,this.size/3);
    }
    amble(){
        //this code runs all the time?? can i do that?? when mySheep.amble is called??? idk
        this.x += random(-1,1);
        this.y += random(-1,1);
    }
    run(){
        //this code will hopefully make them RUN AWAY from the mouse object
        //this is conditionals EEEK!
        //calculate distance between circles centers
        // const d = dist(user.x, user.y, this.x, this.y);
        // const overlap = (d<user.size/2+this.size/2)
        // if(overlap){
        //     this.fill = color(255,0,0);
        // }
    }
}
//ok now that Sheep is a class, I'm going to try and create a sheep (IT WORKS)
let sheep1 = new Sheep(100,100,50);
let sheep2 = new Sheep(400,200,60);
let sheep3 = new Sheep(400,300,50);
let lamb = new Sheep (200,200,20);
/**
 * make a beautiful pasture for our critters
*/
function setup() {
    createCanvas(500,500);
    // lines are scary! get rid of them
    noStroke();

}

/**
 * Draw the beautiful pasture with functions
*/
function draw() {
    background(0,150,0);
    drawHerder();
    //show sheeps
    sheep1.show();
    sheep2.show();
    sheep3.show();
    lamb.show();
    //uses function to make all the sheep amble
    // sheepAmble();



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
//makes the sheep amble
function sheepAmble(){
    sheep1.amble();
    sheep2.amble();
    sheep3.amble();
    lamb.amble();
}