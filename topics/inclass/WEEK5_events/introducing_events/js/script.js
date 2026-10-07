/**
 * Title of Project
 * Laurel Tillier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//defining mouse trigger ball...
let mouseTriggerBall ={
    x:200,
    y:200,
    size:50,
    speed:0,
    fill:{
        r:255,
        g:255,
        b:255,
    }


}

function setup() {
    createCanvas(500,500);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    fill(mouseTriggerBall.fill.r,mouseTriggerBall.fill.g,mouseTriggerBall.fill.b);
    ellipse(mouseTriggerBall.x,mouseTriggerBall.y,mouseTriggerBall.size);
    moveBall();
//     if(mouseIsPressed){
//     fill(random(255),random(255),random(255));
//     ellipse(mouseX,mouseY,mouseTriggerBall.size);
// }
//btw to comment out code you just ctrl+/

}
//this just sets up ball movement based on .speed which we defined earlier BUT for some reason I get a smear
//ok smear was caused by background only occuring once I JUST SAW THE DRAW THING FOR THAT ALSO SO I SHOULD"VE REMEMBERED
function moveBall(){
    mouseTriggerBall.x = mouseTriggerBall.x + mouseTriggerBall.speed;
}
// function mousePressed(){
//     mouseTriggerBall.speed = 2;
// }
// function mouseReleased (){
//     mouseTriggerBall.speed =0;
// }
function mouseWheel(event){
    mouseTriggerBall.size = constrain(mouseTriggerBall.size,5,200);
    mouseTriggerBall.size = mouseTriggerBall.size - event.deltaY;
}
function mouseDragged(){
    mouseTriggerBall.x = mouseX;
}
function mouseMoved(){
    mouseTriggerBall.y = mouseY;
}
//there are some functions inbuilt to p5 LIKE MOUSE PRESSED
//the draw function loops, so anything in it also loops
// if you want results like below you are better off avoiding conditionals
//btw also!! mousePressed CAN ONLY APPEAR ONCE in your code

// function mousePressed() {
//     console.log(mouseX,mouseY)
//     fill(random(255),random(255),random(255));
//     ellipse(mouseX,mouseY,random(5,100));
// }
