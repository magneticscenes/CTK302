// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
let state = 0;
let wormsleft = [];
let wormsright = [];
let duckleft = [];
let duckright = [];
let timer = 0;
let i = 0;
let j = 0;
let k = 0;
let garden;

// var bunnyImage;
var cars = [];
var frogPos;


function setup() {

  createCanvas(windowWidth, windowHeight);

garden = loadImage("assets/garden.png");

wormsleft[0] = loadImage("assets/worm1left.png");
wormsleft[1] = loadImage("assets/worm2left.png");

wormsright[0] = loadImage("assets/worm1right.png");
wormsright[1] = loadImage("assets/worm2right.png");

duckleft[0] = loadImage("assets/duck1left.png");
duckleft[1] = loadImage("assets/duck2left.png");
duckleft[2] = loadImage("assets/duck2.5left.png");
duckleft[3] = loadImage("assets/duck3left.png");
duckleft[4] = loadImage("assets/duck4left.png");


duckright[0] = loadImage("assets/duck1right.png");
duckright[1] = loadImage("assets/duck2right.png");
duckright[2] = loadImage("assets/duck2.5right.png");
duckright[3] = loadImage("assets/duck3right.png");
duckright[4] = loadImage("assets/duck4right.png");

  // wormleft = loadImage("assets/worm1left.png");
  // wormright = loadImage("assets/worm1right.png");
  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // switch (state) {
  //   // case -1:
  //   //   song.loop();
  //   //   state = 0
  //   //   break;
  //   //
  //   case 0:
  //     // image(start, width / 2, height / 2, width, height);
  //     background('green');
  //     //  fill('white');
  //     //text('GAME TIME', 100, 100);
  //     break;

  //
  //   case 1:
  //   game();
  //   break;
  // }




image(garden, width/2, height/2);
  //background('#c6f5ff'); // light blue




  // function mouseReleased() {
  //   switch (state) {
  //     case 0:
  //       state = 1;
  //       break;
  //   }
  // }



  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  // image(bunnyImage, 0, 0, 500, 500);

  image(duckright[k], 0, 0, 100,100);
    // fill(this.r, this.g, this.b, this.a);
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    // rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;
  timer++;
  if (timer > 300){
    timer = 0;
  k++ ;
  if (k > 4){
  k = 0;
  }
}
  // fill('green');
  // ellipse(0, 0, 80, 80);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

//function game(){
  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 70) {
      cars.splice(i, 1);
    }
  }
//}
  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("your words or image here!", width / 2, 600, windowWidth - 200, windowHeight - 200);


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y, 25, 170);
  text("z = " + z, 25, 190);

}


function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 3), random(-5, 3));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    if (this.vel.x > 0) {
    image(wormsright[j], this.pos.x, this.pos.y, 80, 50);
      // fill(this.r, this.g, this.b, this.a);
      // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
      // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
      // rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;
    } else {
        image(wormsleft[j], this.pos.x, this.pos.y, 80, 50);
        // rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;
    }
    timer++;
    if (timer > 300){
      timer = 0;
    j++ ;
    if (j > 1){
    j = 0;
    }
  }
    // maybe use an image here instead!
    // fill(this.r, this.g, this.b, this.a);
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    // rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
