let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
  rectMode(CENTER);
}

function draw() {
switch(state){
  case 0:
  background('pink');
  text("case 0", width/2, height/2);
  break;

  case 1:
  background('purple');
  text("case 1", width/2, height/2);
  break;

  case 2:
  background('magenta');
  text("case 2", width/2, height/2);
  break;
}
rect(width/2, height-100, 100, 50);
}

function mouseReleased(){

if ((mouseX > width/2-50) && (mouseX < width/2 +100) && (mouseY > height-100) && (mouseY < height-100+50)){


state++;
if (state > 2){
  state = 0;
}
}
}
