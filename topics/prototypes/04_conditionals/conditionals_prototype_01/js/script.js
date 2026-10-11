/**
 * Reactive Gradient
 * Laurel
 * 
 * I'm trying to make a gradient that will change color when you click it.
 */

"use strict";

/**
 * Adding a bunch of variables + also creating the canvas
*/
// let swatch = {
//     x:0,
//     y:0,
//     w:200,
//     h:500,
//     fill:{
//         left:0,
//         interA:100,
//         interB:150,
//         interC:200,
//         right:222
//     }
// }

// let swatchColor={
//     color1:0,
//     color2:222
// }

// class Swatch{
//     constructor(x,y,w,h,fill){
//         this.x=x;
//         this.y=0
//         this.w=500
//         this.h=500
//         this.fill= {
//             left:0,
//             right:222
//         }
//     }
//     show(){
//         fill(this.fill);
//         rect(this.x,this.y,this.w,this.h);
//     }
// }

// //creating swatches
// let swatch1 = new Swatch(0,0,500,500,0);
// let swatch2= new Swatch(500,0,500,500);

// //added test color to see if i could make variable variable-er (note:it was successful!)
// let colorLeft = 0;
// let colorRight = 222;
//added variable to denote number of swatches
//ok so if i tack that on there it freaks out which is because 'width' is determined by canvas which comes after this is called
let swatch={
    x:0,
    y:0,
    w:100,
    h:500
}


function setup() {
createCanvas(500,500);
// noStroke();

}

// //Moved this to below canvas to see if my idea for swatch size will work
//     //didnt work when i tossed 'width' in. Trying to think of why
// //added variable for swatch - maybe this should be a constant? 
// let swatch = {
//     w:100,  //ok so I keep forgetting commas, thats whats going wrong I assume
//     h:500,
//     number:2,
//     fill: {
//         left:colorLeft,
//         right:colorRight
//     }

// }
// let mix = {
//     a:lerpColor(colorLeft,colorRight,0.2),
//     b:lerpColor(colorLeft,colorRight,0.4),
//     c:lerpColor(colorLeft,colorRight,0.6)
// }
// let interA = lerpColor(colorLeft,colorRight,0.5);
/**
 * Ideally, this will draw the rectangles that make up the color palette - currently there's just one
*/

function draw() {
     // Create p5.Color objects to interpolate between.
  let left = color("#ff0000");
  let to = color("#f00fff");

  // Create intermediate colors.
  let interA = lerpColor(left, to, 0.3);
  let interB = lerpColor(left, to, 0.5);
  let interC = lerpColor(left,to,0.8);

  // Draw the left rectangle.
  noStroke();
  fill(left);
  rect(swatch.x, swatch.y,swatch.w,swatch.h);

  // Draw the left-center rectangle.
  fill(interA);
  rect(swatch.x+swatch.w,swatch.y,swatch.w,swatch.h);

  // Draw the right-center rectangle.
  fill(interB);
  rect(swatch.x+swatch.w*2,swatch.y,swatch.w,swatch.h);

  //Draw right ish rectangle
  fill(interC);
  rect(swatch.x+swatch.w*3,swatch.y,swatch.w,swatch.h);
  // Draw the right rectangle.
  fill(to);
  rect(swatch.x+swatch.w*4,swatch.y,swatch.w,swatch.h);
    // background(250);  
    // drawSwatch();
    // //one rectangle, just to see what I'm doing for now
    // fill(swatch.fill.left);
    // rect(0,0,swatchWidth,swatch.h);
    // //second rectangle
    // fill(swatch.fill.right);
    // rect(width-swatchWidth,0,swatchWidth,swatch.h);
    // //3 more rectangles so i can set up my thingy (wait this should be a function)
    // //testing out the lerpcolor thing i set up. not sure if the variable will work
    // //its not working... not sure why
    // fill(interA);
    // rect(width/3,0,swatchWidth,swatch.h);
    changeColor();
}
function changeColor(){
    let mouseLeft=mouseX<width/2
    if(mouseLeft){
        left= "#ffffff"
    }
}

// function drawSwatch(){
//     //color1
//     fill(swatchColor.color1);
//     rect(swatch.x,swatch.y,swatch.w,swatch.h);
//     // //mixes of color1 and color2
//     // fill(swatch.fill.interA);
//     // rect(swatch.x+swatch.w,swatch.y,swatch.w,swatch.h);
//     //middle color:
//     // fill(lerpColor(color(swatch.color.color1),color(swatch.color.color2),0.5));
//     // rect(swatch.x+swatch.w*2,swatch.y,swatch.w,swatch.h);
//     // fill(swatch.fill.interC);
//     // rect(swatch.x+swatch.w*3,swatch.y,swatch.w,swatch.h);
//     //color2
//     fill(swatchColor.color2);
//     rect(swatch.x+swatch.w*4,swatch.y,swatch.w,swatch.h);
// }
    /** Lotta comments here:
     * I'm trying to make it so that the number of rectangles is determined by 
     * how many times the user clicks but I worry that doing so is not possible
     * starting with 2 will allow me to set up a conditional that will change color
     * based on mouse click (and then maybe based on WHERE the mouse clicks?)
     * I need to make the x position of the swatch dependent on how many swatches there are
     * 
     * update: im gen so stuck, I think I'm going to work on something else for now because I don't really know how to proceed here :P
     */