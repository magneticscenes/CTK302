let fishes;
let pinkfloyd;
let pnk;

function setup() {
  createCanvas(800, 800);
Fish = loadImage("assets/fishes.jpg");
Pink = loadImage("assets/pnk.jpg");
Floyd = loadImage("assets/pinkfloyd.jpg");
imageMode(CENTER);
}

function draw() {
  image(Fish, width/2, height/2 +200, 300, 200);
image(Pink, width/2, height/2, 300, 200);
image(Floyd, width/2, height/2 -200, 300, 200);
}
