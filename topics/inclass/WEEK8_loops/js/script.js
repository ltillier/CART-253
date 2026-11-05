/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
/**
 * VARIABLES PARKING LOT
 */

let clownImage = undefined;
let horseImage = undefined;

let x = 20;
let y = 250;
let imageWidth = 0;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
 createCanvas(500,500);
    clownImage = await loadImage('assets/images/clown.png');
    horseImage = await loadImage('assets/images/e182272c70f7199618bb5bf003501ec6.jpg');
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background('skyblue')
// image(clownImage,0,0);

x=20; //you can also do this to reset x so that when it loops it still draws things
//otherwise x is too big after the first loop of draw() so nothing happens
while(x<width){
    image(horseImage,x,y,imageWidth,imageWidth);
    x=x+imageWidth;
}
noLoop(); //THIS IS IMPORTANT!!! OTHERWISE THINGS DON'T WORK!!! NO LOOP PREVENTS BACKGROUND FROM COVERING UP THINGS
}

//how to access an image :P
//we want to load images before we draw bc they take a while to load and we don't want things to be janky
//before p5 (current edition) you could preload but they changed it so NOW you use async
//async necessary bc you're calling a function that requires things to wait - this is standard procedure for all external media
/**
 * create a variable that declares variable as undefined OUTSIDE the function so it's global :P
 * DO NOT add forwardslash (/) to the image path!!!! DONT DO IT!!! the image isn't where it says it is in githum hahahah
 * (that might be why that didn't work for me el oh el)
 * ok so this is good info, you don't have to commit/push image file to get it to work locally DUH
 * now we r moving on to other stuff el oh el
 * 
 */
