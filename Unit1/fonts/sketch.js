let f1, f2 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

f1 = loadFont("assets/bladesinger.ttf");
f2 = loadFont("assets/cutelittlesheep.ttf");
f3 = loadFont("assets/SilentLandfield.ttf");
}

function draw() {
background(100);
textSize(48);

textFont(f1);
text("Join my", width/2, height/2);
textFont(f2, 64);
text("World of Warcraft", width/2, height/2 + 60);
textFont(f3);
text("Guild", width/2, height/2 + 120);
}
