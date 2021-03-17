let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object

  myCar = new Car();

}

function draw() {
  background(100);

  myCar.display();
  myCar.move();

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2, height/2);
this.vel = createVector(random(-3,3), random(-3,3));
  }

  // methods

  display() {

    rect(this.pos.x, this.pos., 75, 25);

  }

  move() {
    this.pos.add(this.vel);
  }
}
