//let garden1;
let WateringCan;
let state = 0;
let myTimer = 0 ;

function setup() {
  createCanvas(800, 600);


  // garden1 = loadImage("assets/garden1.jpeg");
  WateringCan = loadImage("assets/WateringCan.jpg");
  imageMode(CENTER);

}

function draw() {

  switch (state) {

    //THIS IS STARTING SCREEN
    case 0:
      // image(garden1, 100, 100);
      text("Click to start", 100, 100);

      break;
//THIS IS SEED STAGE
    case 1:
      background(100);
      text("its a seed", 100, 100);
      //image(garden1, 100, 100);

      break;

      //THIS IS WATERING CUE
    case 2:
      background('pink');
      text("youre watering", 100, 100);
      image(WateringCan, width/2, height/2);
myTimer++ ;
if (myTimer > 3*60){
 myTimer = 0 ;
 state = 3 ;
}

      break;

      //THIS IS MEDIUM PLANT
      case 3:
      background('orange');
      text("you did it now its a plant", 100, 100);
      //image(garden1, 100, 100);
      break;

            //THIS IS WATERING CUE
    case 4:
      background('pink');
      text("youre watering", 100, 100);
      //image(garden1, 100, 100);
myTimer++ ;
if (myTimer > 3*60){
 myTimer = 0 ;
 state = 5 ;
}

      break;

      //THIS IS MONSTER PLANT
      case 5:
      background('red');
      text("monster", 100, 100);
      //image(garden1, 100, 100);
      break;
  }
}

  function mouseReleased() {
    state++;

    // if (state > 5) {
    //  state = 0
    // }

}
