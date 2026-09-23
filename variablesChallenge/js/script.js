/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
// lets not forget the sky either
let sky = {
    r:160,
    g:180,
    b:200

}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  // Make Mr. Furious redder over time
  mrFurious.fill.g = mrFurious.fill.g-1
  mrFurious.fill.b = mrFurious.fill.b-1
 mrFurious.fill.g=constrain(mrFurious.fill.g,50,255);

 // Make day turn to night
sky.r=sky.r-1
sky.g=sky.g-1
sky.b=sky.b-1

// Make night not so dark
sky.r=constrain(sky.r,15,255);
sky.g=constrain(sky.g,50,255);
sky.b=constrain(sky.b,100,255);


}