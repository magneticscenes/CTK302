let x = 0 ;
let ant;

function setup() {
  createCanvas(500, 500);

ant = loadImage("assets/antright1.png");
}

function draw() {
background(100);

push();
translate(x, 0);
//rect(100, 100, 100, 100);
avatar();
//my avatar was too complicated to insert
pop();

x = x + 5 ;
if (x > width){
  x = -500;
}

function avatar() {
  // rain man body head when not pressed
 image(ant);

}
}
