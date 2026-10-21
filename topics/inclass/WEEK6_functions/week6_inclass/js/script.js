/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    complexCircles();
    complexCircles2();
    complexCircles3(100,100,100);
    //we are talking about functions that return a value
    let value = random(5,50);
}

//here's my object
function complexCircles(){
    push();
    fill(255,191,0);
    ellipse(width/2,height/2,80,80);
    fill(255,2,255);
    ellipse(width/2,height/2,60,60);
    fill(255,191,0);
    ellipse(width/2,height/2,40,40);
    pop();
}

//i decided I want another object thats exactly the same as the first one but also different
//clearly the best way to do this is duplicate it and tweak it manually
function complexCircles2(){
    push();
    fill(255,191,0);
    ellipse(width/2+100,height/2+100,80,80);
    fill(255,2,255);
    ellipse(width/2+100,height/2+100,60,60);
    fill(255,191,0);
    ellipse(width/2+100,height/2+100,40,40);
    pop();
}
//we're doing a better way by using parameters
function complexCircles3(x,y,d){
        push();
    fill(255,191,0);
    ellipse(x,y,d);
    fill(255,2,255);
    ellipse(x,y,d-20);
    fill(255,191,0);
    ellipse(x,y,d-40);
    pop();
}


//NOTES
/**
 * ALL FUNCTIONS RETURN
 * so if i have a function at line 3, line 4 only calls when line 3 is done being called
 * ok ok ok so all functions return means when functions are called the specifics are often in a different place
 * so the 'reader' jumps to that section of the code, but then jumps back to the original master list
 * it's like a dinner plan, it's made up of recipes. you have to go to read the specific recipe to do it, but then
 * you go back to the dinner plan 
 */