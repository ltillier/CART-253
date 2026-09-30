/**
 * Herd of Horses?
 * Laurel Tillier
 * 
 * Herd of horses? Yeah, I've heard of em.
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
background(175,195,225);
//riverbank silhouette
fill(0,200,0);
triangle(0,250,500,200,500,400);
//river
fill(0,0,200);
ellipse(100,425,900,350);
//other riverbank
fill(0,200,0);
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