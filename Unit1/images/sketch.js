let day;
let night;

function setup() {
  createCanvas(800, 800);

imageMode(CENTER);
}

function draw() {
image(day, width/2, height/2, 200, 200);
image(night, width/2, height/2 -200, 200, 200);
}
