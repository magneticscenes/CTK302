function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
 // background(220);
  fill(0, random(255), 0, random(40));
  ellipse(mouseX, mouseY, random(100), random(100));
  //text("Word!",mouseX, mouseY);
}

function mouseReleased() {
  saveCanvas("MyPicture", 'jpg');
}
