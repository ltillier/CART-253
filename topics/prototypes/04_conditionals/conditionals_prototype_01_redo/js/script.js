/**
 * Horse
 * Laurel Tillier
 * 
 * I guess it's more of a unicorn.... try to touch it? i guess?
 * I literally don't know what im doing atp
 */

"use strict";

let horse={
    x:100,
    y:24,
    size:16,
    speed:1,
    a:undefined,
    b:undefined,
    c:undefined
}

let magicColor = 0;


/**
 * load images, create canvas, create background, spawn a horse :)
*/
async function setup() {
    horse.a = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_left.png');
    horse.b = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_left.png');
    horse.c = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_right.png');

    createCanvas(128,32);
    background(0);
    imageMode(CENTER);
    horseSpawn(); 

}

/**
 * Draws the horse (technically, the horse is already drawn but still)
*/
function draw() { 
    horseReact();
    capture();
    colorChange();
}

//draws the horse and the background so there are no weird echoes
function drawHorse(img) {
    background(0);
    image(img,horse.x,horse.y);
}

//turns the horse based on mouse position on X axis
function turn(){

    if(mouseX>horse.x){
        drawHorse(horse.b);

        horse.x=horse.x-0.5;
    }
    if(mouseX<horse.x){
        drawHorse(horse.c);

        horse.x=horse.x+0.5;
    }

    horse.x=constrain(horse.x,0,width);
}

//if the mouse is too close to the horse, the horse will turn
function horseReact(){

    let d = dist(horse.x,horse.y,mouseX,mouseY);
    let tooClose = d<20;

    let a = dist(mouseX,mouseY,pmouseX,pmouseY);
    let tooFast = a>5;
    

    if (tooClose===true || tooFast===true){
        turn();
    }
}

//horse spawns randomly on canvas
function horseSpawn(){
    horse.x = random(0,width);
    spawnDirection();

}

//initial horse direction is based on spawn location
function spawnDirection(){
    let canvasLeft = horse.x<width/2;
    let canvasRight = horse.x>width/2;

    if(canvasLeft){
        drawHorse(horse.a);
    }
    if(canvasRight){
        drawHorse(horse.c);
    }
}


// //function to determine if the mouse is moving :P
// //technically useless (for now) but im keeping jic
// function isTheMouseMoving(){

//     let x = mouseX;
//     let _x = pmouseX;
//     let notMoving = x===_x;
//     let moving = !(notMoving);

//     if(moving===true){
//         background(0);
//         drawHorse(horse.c);
//     }
// }

//you can now catch the horse
function capture() {
    let d = dist(horse.x,horse.y,mouseX,mouseY);
    let overlap = d<8;

    if(overlap){
        win();
        horse.x=mouseX;
    }
}

//function for 'you win!'
function win() {
    push();
    fill(200,magicColor,255);
    textFont('Comic Sans MS');
    textAlign(CENTER);
    text('you win',width/2,height/2);
    pop();
}

//function for 'you win!' color
function colorChange() {
    magicColor = magicColor+5;
    if(magicColor>=360){
        magicColor=0;
    }
console.log(magicColor);
}

