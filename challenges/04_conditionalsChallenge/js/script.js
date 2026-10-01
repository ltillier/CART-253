/**
 * Push A Puck
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  speedx: 1,
  speedy: 1,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  // Move puck
  movePuck();
  console.log(puck.x);
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}
/**
 * Moves puck when user gets too close
 */
function movePuck() {
  //check overlap

  //calculate distance between circles' centres
  const d = dist(user.x, user.y, puck.x, puck.y);
  //check if that distance is smaller than their two radii
  const overlap = (d< user.size/2 + puck.size/2);
  //what happens when they do overlap?
  //move the puck away from the user when they overlap
  if(overlap) {
    puck.x = puck.x + puck.speedx
    puck.y = puck.y + puck.speedy
    if(puck.x >= user.x) {
      puck.speedx = 5
    }
    if(puck.x <= user.x) {
      puck.speedx = -5
    }
    if(puck.y >= user.y){
      puck.speedy = 5
    }
    if(puck.y <= user.y){
      puck.speedy = -5
    }
puck.x = constrain(puck.x,0+puck.size/2,width-puck.size/2)
puck.y = constrain(puck.y,0+puck.size/2,height-puck.size/2)
  }
}
