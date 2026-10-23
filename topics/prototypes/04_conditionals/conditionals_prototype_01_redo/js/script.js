/**
 * Herd of Horses
 * Laurel Tillier
 * 
 * (ideally) this prototype gives you horses but they run away when you get too close bc THEY
 */

"use strict";

let horse1;
let horse2;

let horse={
    y:248,
    size:16
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    horse1 = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_left.png');
    horse2 = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle_right.png');

    createCanvas(256,256);

    imageMode(CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    drawHorse(horse1,10);
    drawHorse(horse2,50);
}


function drawHorse(img,x) {
    image(img,x,horse.y);
}