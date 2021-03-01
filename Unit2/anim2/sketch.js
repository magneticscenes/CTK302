let x = 0 ;

function setup() {
  createCanvas(500, 500);
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
 fill('red')
 ellipse(410, 170, 80, 80);

 fill('black');
 arc(410, 180, 40, 40, 0, PI + QUARTER_PI, CHORD);

  // rain man arms
  fill('red');
  line(500, 200, 400, 225);
  fill('red');
  line(300, 200, 400, 225);

  fill('black')
  ellipse(395, 150, 10, 10);

  fill('black')
  ellipse(425, 150, 10, 10);
  // rain man body
  noStroke()
  fill('red');
  rect(390, 200, 40, 140);
  rect(395, 230, 10, 140);
  rect(413, 230, 10, 140);

}
}
