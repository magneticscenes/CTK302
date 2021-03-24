let cars = [];
let maxCars = 5;
let maxTimer = 10 * 60;
let timer = 0;
let frogPos;
let state = 0;
let poms = [];
let j = 0;
let paper;
let pommyleft, pommyright;
let right, left;

function setup() {

  imageMode(CENTER);
  createCanvas(500, 500);

  paper = loadImage("assets/paperbackground.png");
  poms[0] = loadImage("assets/dog21left.png");
  poms[1] = loadImage("assets/dog2out.png");
  pommyleft = loadImage("assets/dog21left.png");
pommyright = loadImage("assets/dog21right.png");
  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height / 2 - 100);


}

function draw() {

  switch (state) {

    case 0:
      background('purple');
      fill('white');
      text('GAME TIME', 100, 100);
      break;

    case 1:
      background('yellow');
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 2 //bc they win when timer runs out
      }
      break;

    case 2: //win
      background('pink');
      fill('white');
      text('yOu wOn, click to play again', 100, 100);
      break;

    case 3: //lose
      background('black');
      fill('white');
      text('lOsT, click to play again', 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function chef() { //THIS IS WHERE YOU INSERT PLAYERCHEF
  stroke(1);
  fill('gray');
  ellipse(frogPos.x, frogPos.y, 50, 40);
  fill('lightblue');
  ellipse(frogPos.x, frogPos.y, 30, 30);
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

function game() {
  image(paper, width / 2, height / 2);
  background(100);



  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 25) {
      // cars.splice(i, 1);
      state = 3
    }
  }

  //check to see if array == 0
  if (cars.length == 0) {

    state = 2;
  }
  //-----------------TO MAKE PLAYER SWITCH DIRECTION
  // function keyPressed() {
  //   if (keyCode === LEFT_ARROW) chef1 = yodaLeft;
  //   if (keyCode === RIGHT_ARROW) chef1 = yodaRight;
  // }
  //frog
  checkForKeys();
  chef(frogPos.x, frogPos.y, 50, 50);

}

// Car class
class Car {
  // constructor and attributes
  constructor() {

    this.pos = createVector(-10, random(height));
    this.vel = createVector(random(-8, 8), random(-0, 0));
    this.timer = 0;
    this.maxTimer = 10 * 60;
    this.j = 0;
    rect(this.pos.x, this.pos.y, 50, 50, 100);
  }

  // methods
  display() {

if (this.vel > 0){
   image(pommyright, this.pos.x, this.pos.y);
} if (this.vel < 0){
  image(pommyleft, this.pos.x, this.pos.y);
}
    // this.timer = this.timer + 1;
    // if (this.timer > this.maxTimer) {
    //   this.j = this.j + 1;
    //   if (this.j > birds.length - 1) this.j = 0;
    //   this.timer = 0 ;
    // }
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0, this.pos.y = random(height);
    if (this.pos.x < 0) this.pos.x = width, this.pos.y = random(height);
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
