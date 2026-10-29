/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let balls = []; //will be something
/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    x: mouseX,
    y: mouseY,
    size: 20,
    // Colour
    fill: random(0,200),
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");
  
//   moveBall(ball1);
//   bounceBall(ball1);
//   drawBall(ball1);

  for (let ball of balls){
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(tempBall) {
  tempBall.x += tempBall.velocity.x;
  tempBall.y += tempBall.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(tempBall) {
  // Check if the ball has reached the left or right
  const bounceX = (tempBall.x > width || tempBall.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (tempBall.y > height || tempBall.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    tempBall.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    tempBall.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(tempBall) {
  push();
  noStroke();
  fill(tempBall.fill);
  ellipse(tempBall.x, tempBall.y, tempBall.size);
  pop();
}

function mousePressed(){
    let ball = createBall();
    balls.push(ball);
}