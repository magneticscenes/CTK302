let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object
  // for (let i = 0 ; i < 20 ; i++){
  //   cars.push(new Car());
  // }
  noStroke();
}

function draw() {
  background(100);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }
}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255;//random(100, 255);
    this.g = 255;//random(0, 50);
    this.b = 255;//random(100, 255);
    this.a = random(200, 255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    rect(this.pos.x, this.pos.y, 75, 25);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}
