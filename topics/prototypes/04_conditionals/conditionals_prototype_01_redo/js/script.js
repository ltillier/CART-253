/**
 * Herd of Horses
 * Laurel Tillier
 * 
 * (ideally) this prototype gives you horses but they run away when you get too close bc THEY
 */

"use strict";

let img;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    img = await loadImage('https://ltillier.github.io/CART-253/topics/prototypes/04_conditionals/conditionals_prototype_01_redo/assets/images/horse_idle.png');
    
    createCanvas(32,32);

    imageMode(CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    image(img,8,24);
}