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

//bird location
let bird = {
    X:10,
    Y:10
}

//rage 
let rage = 1

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
  mrFurious.fill.g = mrFurious.fill.g-random(0,1)
  mrFurious.fill.b = mrFurious.fill.b-random(0,1)
 mrFurious.fill.g=constrain(mrFurious.fill.g,50,255);

 // Make day turn to night
sky.r=sky.r-1
sky.g=sky.g-1
sky.b=sky.b-1

// Make night not so dark
sky.r=constrain(sky.r,15,255);
sky.g=constrain(sky.g,50,255);
sky.b=constrain(sky.b,100,255);

//draw bird
drawBird(bird.X,bird.Y);

//Mr. Furious wiggles with rage
mrFurious.x=mrFurious.x+random(-rage,rage);
mrFurious.y=mrFurious.y+random(-rage,rage);

//Mr. Furious stays in the canvas despite his wrathful wiggles
mrFurious.x=constrain(mrFurious.x,0,400);
mrFurious.y=constrain(mrFurious.y,0,400);

//His rage increases
rage=rage+random(-1,1)
}

//makin my 'bird' - its a wizard orb
function drawBird(x,y){
    //orb pedestal
    fill(100,50,10);
    ellipse(x,y,50,20);
    //orb silhouette
    fill(100,50,100);
    ellipse(x,y-20,50,50);
    //orb color
    fill(random(200,220),random(150,155),random(200,225));
    ellipse(x+2,y-22,47,47);
    //orb shine
    fill(255,255,255);
    ellipse(x+10,y-35,10,10);

    //makin my bird MOVE and wiggle
    bird.X=bird.X+random(-2,3)
    bird.Y=bird.Y+random(-1,2)
    bird.X=constrain(bird.X,0,200)
    bird.Y=constrain(bird.Y,0,200)

}
