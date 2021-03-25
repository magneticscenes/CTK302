let cars = [];
let maxCars = 5;
let maxTimer = 10 * 60;
let timer = 0;
let frogPos;
let state = -1;
let pomsteps = [];
let j = 0;
let paper;
let pommyleft = [];
let pommyright = [];
let right, left;
let song;
let cat;
let start;
let win;
let lose;

function preload() {
  song = loadSound('assets/happysong4dogs.mp3');
}

function setup() {

  imageMode(CENTER);
  createCanvas(700, 500);

  cat = loadImage("assets/bigcat.png");
  paper = loadImage("assets/paperbackground.png");
  pommyleft[0] = loadImage("assets/dog21left.png");
  pommyleft[1] = loadImage("assets/dog21leftstep.png");
  pommyright[0] = loadImage("assets/dog21right.png");
  pommyright[1] = loadImage("assets/dog21rightstep.png");
  start = loadImage("assets/paperbackgroundstart.png");
  win = loadImage("assets/paperbackgroundwin.png");
  lose = loadImage("assets/paperbackgroundlose.png");
  //song = loadSound('assets/happysong4dogs.mp3') ;
  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height / 2 - 100);


}

function draw() {

  switch (state) {
    case -1:
      song.loop();
      state = 0
      break;

    case 0:
      image(start, width / 2, height / 2, width, height);
      background(100, 80);
      //  fill('white');
      //text('GAME TIME', 100, 100);
      break;

    case 1:
      //background('yellow');
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 2 //bc they win when timer runs out
      }
      break;

    case 2: //win
      image(win, width / 2, height / 2, width, height);
      background(100, 80);
      break;

    case 3: //lose
      image(lose, width / 2, height / 2, width, height);
      background(100, 80);
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

function bigcat() { //THIS IS WHERE YOU INSERT PLAYERbigcat

  image(cat, frogPos.x, frogPos.y, 110, 110);

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function game() {
  image(paper, width / 2, height / 2, width, height);
  background(100, 80);


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 45) {
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
  //   if (keyCode === LEFT_ARROW) bigcat1 = yodaLeft;
  //   if (keyCode === RIGHT_ARROW) bigcat1 = yodaRight;
  // }
  //frog
  checkForKeys();
  bigcat(frogPos.x, frogPos.y, 50, 50);

}

// Car class
class Car {
  // constructor and attributes
  constructor() {

    this.pos = createVector(-10, random(height));
    this.vel = createVector(random(-8, 8), random(-0, 0));
    //this.timer = 0;
    //this.maxTimer = 10 * 60;
    //this.j = 0;
    rect(this.pos.x, this.pos.y, 50, 50, 100);
  }

  // methods
  display() {

    if (this.vel.x > 0) {
      image(pommyright[j], this.pos.x, this.pos.y);
    }
    if (this.vel.x < 0) {
      image(pommyleft[j], this.pos.x, this.pos.y);
    }

    // timer++;
    //     if (timer > 50) {
    //       timer = 0;
    //       j++;
    //       if (j > 1){
    //       j = 0 ;
    //     }
    //   }
  }
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0, this.pos.y = random(height);
    if (this.pos.x < 0) this.pos.x = width, this.pos.y = random(height);
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
