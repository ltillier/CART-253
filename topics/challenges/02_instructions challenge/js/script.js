/**
 * Canal at Night
 * Laurel Tillier
 * 
 * This project is a drawing of the Lachine Canal at night
 */

"use strict";

/**
 * Created canvas
*/
function setup() {
    
createCanvas(500,500);
noStroke();

}


/**
 * Draws river, riverbanks, sky, powerlines
*/
function draw() {
background(160,180,210);
//riverbank silhouette
fill(45,60,40);
triangle(0,250,500,200,500,400);
//river
fill(65,95,120);
ellipse(100,425,900,350);
//other riverbank
fill(45,60,40);
quad(0,200,220,240,220,275,0,375);
//powerlines
fill(200,200,200);
quad(353,140,357,140,359,240,351,260);
rect(333,155,45,3);
rect(333,190,45,3);
//closer powerline lines
line(333,155,500,50);
line(333,190,500,100);
line(378,155,500,90);
line(378,190,500,140);
//further powerline lines
line(160,230,333,155);
line(160,230,333,190);
line(160,230,378,155);
line(160,230,378,190);

}