/**
 * Push A Puck
 * Laurel Tillier
 * 
 * Use the mouse to push the puck into the goal
 */

"use strict";

const puck = {
  x: 200,
  y: 200,
  size: 50,
  speedx: 1,
  speedy: 1,
  fill: "#ff00f0"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

let target = { //add a target for the puck to hit!
  x:50,
  y:50,
  size:50,
  fill:"#fff000",
  fills: {
    noOverlap: "#00ff0d",
    overlap: "#ff00f0"
  }

}
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
  background("#7e7c79");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  // Move puck
  movePuck();
  // Draw target
  drawTarget();
  hitTarget();
  moveTarget();
 
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

/**
 * Creates Target for puck to hit!
 */
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x,target.y,target.size);
  pop();
}
/**
 * Target changes color when puck 'hits'
 */
function hitTarget() {
  //check overlap
  //i probably have to use a different variable
  const dd = dist(puck.x,puck.y,target.x,target.y);
  //check distance 
  const overlapp = (dd< puck.size/2 + target.size/2);
  //set fill based on overlap
  if (overlapp) {
    target.fill = target.fills.overlap;
  }
  else {
    target.fill = target.fills.noOverlap;
  }

}
function moveTarget() {
  target.x = target.x + random (-5,5);
  target.y = target.y + random (-5,5);
target.x = constrain(target.x,0+target.size/2,width-target.size/2);
target.y = constrain(target.y,0+target.size/2,height-target.size/2);
}