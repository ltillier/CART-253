/**
 * Herd of Horses?
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let img;

// Load the image and create a p5.Image object.
async function setup() {
  img = await loadImage('/clown.jpg');
  createCanvas(100, 100);

  // Draw the image.
  image(img, 0, 0);

  describe('honk honk');
}