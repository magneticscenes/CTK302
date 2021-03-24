var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird;
var birds = [];
var gok ;
var myFont ;
var sad ;
var winn ;
var ssng ;

function setup() {

  createCanvas(800, 800);

  birds[0] = loadImage("assets/bird1.png");
  birds[1] = loadImage("assets/bird2.png");
  birds[2] = loadImage("assets/bird3.png");
  yodaRight = loadImage("assets/eagleright.png");
  yodaLeft = loadImage("assets/eagleleft.png");
  yoda = yodaRight;

  bird = loadImage("assets/bird1.png");

    gok = loadImage('assets/land.jpg');
    sad = loadImage('assets/loo.jpg');
    winn = loadImage('assets/win.jpg');
    myFont = loadFont('assets/Bannie.ttf');
    ssng = loadSound('assets/slice.wav') ;


  //spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());

  }


  //initial frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {
    case 0:
    background('#ffcb08');
     fill('black');
     textFont(myFont);  // SETS the font
     textSize(50);
      text("WELCOME, \n Click to Play", 200, 250);



      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      //background(200);
      image(sad, width/2, height/2);
      textFont(myFont);  // SETS the font
      textSize(100);
      text("LOSE", 300, 200);

      break;

    case 3:
      //background(200);
      image(winn, width/2, height/2);
      textFont(myFont);  // SETS the font
      textSize(100);
      text("WIN", 300, 200);

      break;


  }


}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  car = []; //clear the array
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length-1)) ;
  this.timer = 0;
  this.maxTimer = random(10, 60);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
    //ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
    //image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0 ;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  //background(100);
  image(gok, width/2, height/2);

  //iterate
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //test if car is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

      ssng.play() ;

    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3; // they won
  }

  // draw the eagle
  fill('green');
  image(yoda, frogPos.x, frogPos.y, 100, 100);
  //ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys();

}
