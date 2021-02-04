let day;
let night;
function setup() {
  createCanvas(800, 800);
day = loadImage("assets/day.jpg");
night = loadImage("assets/night.jpg");
imageMode(CENTER);
}

function draw() {
image(day, width/2, height/2, 300, 200);
image(night, width/2, height/2 -200, 300, 200);
}
