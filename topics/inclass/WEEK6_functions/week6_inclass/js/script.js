/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// let circleX = 100;
// let circleY = 100;
// let circle_X_2=220;
// let circle_Y_2=10;

let circleA={
    circleX:250,
    circleY:250
}

let circleB={
    circleX:250,
    circleY:10
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);
    let newVal = squareNum(2)
    console.log(newVal);

}

function squareNum(num){
    let squaredNumValue = num*num;
    return squaredNumValue;
    
}

function calculateDistance(objX,objY){
    let d = dist(mouseX,mouseY,objX,objY)
    let mappedVal = map(d,0,250,2,10)

    return mappedVal;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    // complexCircles();
    // complexCircles2();

    let newVal = calculateDistance(circleA.circleX,circleA.circleY);
    // let newStroke = calculateDistance(circleX,circleY);

    
    complexCircles3(circleA.circleX,circleB.circleY,100,newVal);
    changeYY(circleA.circleY);
}

function changeYY(){
    circleA.circleY=circleA.circleY+1;
    console.log(circleA.circleY);
}

// function changeY(yVal){
//     yVal=yVal+1;
//     console.log(yVal);
//     return yVal;

// }
// //here's my object
// function complexCircles(){
//     push();
   
//     fill(255,191,0);
//     ellipse(width/2,height/2,80,80);
//     fill(255,2,255);
//     ellipse(width/2,height/2,60,60);
//     fill(255,191,0);
//     ellipse(width/2,height/2,40,40);
//     pop();
// }

// //i decided I want another object thats exactly the same as the first one but also different
// //clearly the best way to do this is duplicate it and tweak it manually
// function complexCircles2(){
//     push();
//     fill(255,191,0);
//     ellipse(width/2+100,height/2+100,80,80);
//     fill(255,2,255);
//     ellipse(width/2+100,height/2+100,60,60);
//     fill(255,191,0);
//     ellipse(width/2+100,height/2+100,40,40);
//     pop();
// }
//we're doing a better way by using parameters
function complexCircles3(x,y,d,newStroke){
    push();
    strokeWeight(newStroke);
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
 * hannibal ass explanation
 * hah
 * tell me will, when your task is complete, what will you return to?
 * 
 * when you 'return' a value and you want to use it in another function, you have to declare it there
 * So if I return 'mappedVal', I have to take the function that i returned it IN and and run that in my other function
 * WAIT THIS MAKES SO MUCH SENSE
 * so
 * that function is an equation. i have 2 variables, they both calculate a value, but the function does nothing with it
 * i have to tell it to give me the end value by saying 'return'. 
 * 
 * anything declared outside of a function is 'global' so it is available to everyone
 * 
 * if your function is not meant to change the value, its ok if the value you're getting is a copy and does not affect the rest of the code
 * 
 */