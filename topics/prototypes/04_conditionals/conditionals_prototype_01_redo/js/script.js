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

    imageMode(CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    horseReact();
}


function drawHorse(img) {
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
    else{
        drawHorse(horse.a);
    }

}
