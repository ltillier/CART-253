/**
 * Herd of Horses
 * Laurel Tillier
 * 
 * (ideally) this prototype gives you horses but they run away when you get too close bc THEY
 */

"use strict";

let horse={
    x:100,
    y:248,
    size:16,
    a:undefined,
    b:undefined,
    c:undefined
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    horse.a = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_left.png');
    horse.b = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_left.png');
    horse.c = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_right.png');

    createCanvas(256,256);
       background(0);
    imageMode(CENTER);
    horseSpawn(); 

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    horseReact();
    isTheMouseMoving();
}


function drawHorse(img) {
    background(0);
    image(img,horse.x,horse.y);
}

//turns the horse based on mouse position on X axis
function turn(){

    if(mouseX>horse.x){
        drawHorse(horse.b);

        // horse.x=horse.x-0.5;
    }
    if(mouseX<horse.x){
        drawHorse(horse.c);

        // horse.x=horse.x+0.5;
    }
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
    // if (moving===true){
    //     drawHorse(horse.c);
    // }

    // else{
    //     drawHorse(horse.a);
    // }

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
        drawHorse(horse.c);
    }
    if(canvasRight){
        drawHorse(horse.c);
    }
}
//manage horse echo
// function hideEcho(){
//     background(0);
// }
//horse movement is dependent on horse direction

// //redraw horse and background every time anything happens
// function maintain(){
//     let active = !();
//     if(active){
//         background(0);
//         drawHorse(horse.c);
//     }
// }


// if d=0, //mouse is not being moved

//i need to write a function that somehow determines whether 
function isTheMouseMoving(){

    let x = mouseX;
    let _x = pmouseX;
    let notMoving = x===_x;
    let moving = !(notMoving);

    if(moving===true){
        background(0);
        drawHorse(horse.c);
    }
}
