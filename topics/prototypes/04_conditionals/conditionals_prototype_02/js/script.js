/**
 * Herd Anxious Sheep
 * Laurel Tillier
 * 
 * Use the mouse to herd sheep - keep them from running away from your pasture!
 * Maybe you should build a fence...
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
        this.speedx = 1;
        this.speedy = 1;
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
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    freakOut(){
        //this is me testing whether just writing this as constant here and then putting
        //conditional elsewhere will do the trick
        this.x += random(-5,5);
        this.y += random(-5,5);

    // run(){
    //     if(MouseEvent){
    //         this.x += 1
    //     }
        //this code will hopefully make them RUN AWAY from the mouse object
        //this is conditionals EEEK!
        //calculate distance between circles centers
        // const d = dist(user.x, user.y, this.x, this.y);
        // const overlap = (d<user.size/2+this.size/2)
        // if(overlap){
        //     this.fill = color(255,0,0);
        // }
    }
    move(){ 
        const d = dist(this.x,this.y,herder.x,herder.y);
        const tooClose = (d<this.size/2+herder.size/2+10);
        if(tooClose) {
            if(this.x > herder.x){
                this.speedx = 2
            }
            else{
                this.speedx = -2
            }
            if(this.y - herder.y >0){
                this.speedy = 2
            }
            else{
                this.speedy = -2
            }
            this.x = this.x + this.speedx
            this.y = this.y + this.speedy
        }
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
    herder.x = mouseX;
    herder.y = mouseY;
    background(0,150,0);
    //draws the herder with functions
    drawHerder();
    //draws the sheep with functions
    drawSheep();
    //uses function to make all the sheep amble
    // sheepAmble();
    //moves the sheep IF herder is too close... unfortunately it's not working atm
    moveSheep();
    sheepAmble();
}

//draws the herder
function drawHerder(){
    push();
    fill(herder.fill);
    ellipse(mouseX,mouseY,herder.size);
    pop();
}


//draws the sheep
function drawSheep(){
    sheep1.show();
    sheep2.show();
    sheep3.show();
    lamb.show();
}

//makes the sheep amble
function sheepAmble(){
    sheep1.amble();
    sheep2.amble();
    sheep3.amble();
    lamb.amble();
}

//makes the sheep move when the mouse gets too close
function moveSheep(){
    sheep1.move();
    sheep2.move();
    sheep3.move();
    lamb.move();
}