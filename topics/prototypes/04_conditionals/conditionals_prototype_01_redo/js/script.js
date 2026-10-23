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
    img = await loadImage('https://ltillier.github.io/CART-253/images/e182272c70f7199618bb5bf003501ec6.jpg');
    
    createCanvas(1000,1000);

    image(img,0,0);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}