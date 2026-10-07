/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * making basic setup for testing key events
*/

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
noStroke();
}


/**
 * Draws the circle
*/
function draw() {
    background(0);
    fill(mouseTriggerBall.fill.r,mouseTriggerBall.fill.g,mouseTriggerBall.fill.b);
    ellipse(mouseTriggerBall.x,mouseTriggerBall.y,mouseTriggerBall.size);


}
//moves the circle IF the key 'r' is pressed - except CURRENTLY IT DOESN'T WORK

function KeyPressed(event){
    console.log(event.key);
    // if(event.key==='r'){
    //     mouseTriggerBall.x = mouseTriggerBall.x+5;
    // }
    // if(event.key==='R'){
    //     mouseTriggerBall.x = mouseTriggerBall.x +5;
    // }

}