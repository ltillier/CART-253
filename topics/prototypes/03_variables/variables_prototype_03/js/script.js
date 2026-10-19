/**
 * POV:DOCTOR
 * Laurel Tillier
 * 
 * move your mouse (and scalpel) closer to the heart to increase the heartrate
 * 
 */

"use strict";
    
/**
 * creating a canvas
*/
function setup() {
createCanvas(500,500);
angleMode(DEGREES);
}

    let heart={
        left:{
            x:75,
            y:250
        },
        right:{
            x:225,
            y:275
        }
    }
    

/**
 * Draws organ, makes it pulse based on mouse proximity, etc
*/
function draw() {
    background(0);
    //trying blood to make things interesting
    drawBlood();
    //trying to draw arteries yupppp] also yes they're not veins but artery is sooo wordy for code
    drawVein();
    //trying to draw the heart properly now
    drawHeart();
    //drew a scalpel that the 'user' 'wields' with the mouse
    scalpel();
    //set up a heart beat/pulse based on variables
    heartBeat();
}
//function that draws the heart
function drawHeart(){
    //I think I need to fiddle around with what the heart looks like tbh
    push();
    noStroke();
    fill('#dd352f');
    translate(100,50);
    beginShape();
    //shape is going counter clockwise from top left point
    vertex(75,100);
    vertex(50,150);
    //left pulse
    vertex(heart.left.x,heart.left.y);

    vertex(150,300);
    vertex(200,300);
    //right pulse
    vertex(heart.right.x,heart.right.y);

    vertex(250,200);
    vertex(200,100);
    endShape();
    pop();
}

function drawVein(){
    //ough
    push();
    noStroke();
    fill('#c00000');
    rect(150,100,50,100);
    rect(220,100,25,100);
    pop();
}

function drawBlood(){
    //setting up an anxiety mechanic
    let d = dist(mouseX,mouseY,width/2,height/2);
    let a =(1200/d); 
    frameRate(a);
    
    //making blood and making it so the amount is based on framerate and therefore how often the heart is 'pumping'
    //i can't figure out how to make it add linearly so im giving up for now, will do later tho
    let blood=50;
    //blood pools in a way that will hopefully look organic ish enough
    blood=blood+a+random(10);

    //drawing the blood
    push();
    noStroke();
    fill('#ff0000');
    ellipse(175,100,blood);
    ellipse(232.5,100,blood/2);
    pop();
}

//makes the heart 'beat' thru moving points
function heartBeat(){
    //leftpulse
        //variables
        let lxpos1=75;
        let lxpos0=100;
        let lxpos2=125;

        heart.left.x=random(lxpos1,lxpos2,lxpos0);
    //rightpulse
        let rxpos1=225;
        let rxpos2=200;
        let rxpos3=175;

        heart.right.x=random(rxpos1,rxpos2,rxpos3);

}

//how do you do surgery without tools?
//makes a scalpel!
function scalpel(){
    push();
    fill('#65a1c4');
    rect(mouseX,mouseY,15,100,5,0,5,5);
    fill(200);
    rect(mouseX+5,mouseY-30,10,30,10,0,0,0);
    pop();
}