var cars = [];
var frogPos;
var myState = -1;
var maxCars = 10;
var maxTimer = 1000 + 60;
var timer = maxTimer;
var winner;
var loser;
var alienated;
var epic;

function preload() {
  epic = loadSound('assets/bensound-epic.mp3');
}

function setup() {
  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, 400);

  alienated = loadFont('assets/alienated.ttf');
  winner = loadImage("assets/winner.jpg");
  loser = loadImage("assets/loser.jpg");

  ellipseMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  x = width;
  y = height / 2;
  r = width;
  g = width;
  b = width;
}



function draw() {

  switch (myState) {
    case -1:
      epic.loop();
      myState = 0;
      break;

    case 0: //menu
      menu();
      break;

    case 1: //game state
      game();
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 2;
      }
      break;
    case 2: //win state
      image(winner, 0, 0, 800, 800);
      fill('white');
      textSize(20);
      textFont(alienated, 20);
      text("click_anywhere.", 400, 700);
      textFont(alienated, 40);
      text("YAY!_YOU_WON!", width / 2, height / 2);
      break;

    case 3: //lose state
      image(loser, 0, 0, 800, 800);
      fill('white');
      textSize(20);
      textFont(alienated, 20);
      text("click_anywhere.", 400, 700);
      textFont(alienated, 40);
      text("OOPS_YOU_LOSE", width / 2, 600);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //they won
      //reset timer
      timer = maxTimer;
      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;

    case 3: //they lost
      //reset timer
      timer = maxTimer;
      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
  break;
}
}

function menu() {
  background('black');
  fill('white');
  textSize(40);
  textFont(alienated, 40);
  text("Planetary_Dodge!", 400, 200);
  fill('white');
  textSize(30);
  textFont(alienated, 14);
  text("Survive_long_enough_to_win!!", 400, 300);
  fill('red');
  textSize(20);
  textFont(alienated, 20);
  text("click_anywhere_to_play", 400, 710);
  fill('red');
  textSize(20);
  textFont(alienated, 20);
  text("use", 200, 600);
  stroke(50);
  fill('green');
  ellipse(x, y, 30, 30);
  fill('purple');
  ellipse(r, 200, 40, 40);
  fill('orange');
  ellipse(b, 500, 70, 70);
  fill('red');
  ellipse(g, 750, 60, 60);

  x = x - 4;
  r = r - 5;
  b = b - 2;
  g = g - 3;

  if (x <= 0) {
    x = width;
  }
  if (r <= 0) {
    r = width;
  }
  if (b <= 0) {
    b = width;
  }
  if (g <= 0) {
    g = width;
  }

  fill('yellow');
  triangle(360, 400, 440, 400, 400, 440);
  fill('red');
  ellipse(400, 405, 80, 50);
  fill('gray');
  ellipse(400, 400, 80, 50);
  fill('lightblue');
  ellipse(400, 390, 50, 40);
  noStroke();
  fill('red');
  triangle(200, 500, 150, 550, 250, 550);
  fill('black');
  triangle(200, 510, 150, 550, 250, 550);
  fill('red');
  triangle(200, 660, 150, 610, 250, 610);
  fill('black');
  triangle(200, 650, 150, 610, 250, 610);
  fill('red');
  triangle(300, 580, 250, 530, 250, 640);
  fill('black');
  triangle(290, 580, 250, 530, 250, 640);
  fill('red');
  triangle(100, 580, 150, 530, 150, 640);
  fill('black');
  triangle(110, 580, 150, 530, 150, 640);
}

function game() {
  background('black');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 30) {
      //cars.splice(i, 1);
      myState = 3;
      frogPos = createVector(400, 400);
    }
  }
  // frog
  //fill('green');
  rocket(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
}

function rocket() {
  stroke(1);
  fill('gray');
  ellipse(frogPos.x, frogPos.y, 50, 40);
  fill('lightblue');
  ellipse(frogPos.x, frogPos.y, 30, 30);
}

function touchStarted() {
  getAudioContext().resume();
}

// our Car class!!!!!
function Car() {
  // attributes
  this.pos = createVector(30, random(height));
  this.vel = createVector(random(-7, 7), random(-7, 7));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 30, 30, 100);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
