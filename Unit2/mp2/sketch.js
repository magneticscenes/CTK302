let WateringCan;
let MidPlant;
let Pot;
let Room;
let Monster;
let Vines;
let Start;
let Here;
let Baby;
let ClickTake;
let Wait;
let Click;
let laugh;
let y = 0;
let state = 0;
let myTimer = 0;

function preload() {
  laugh = loadSound("assets/plantlaugh.mp3");
}

function setup() {

  createCanvas(800, 600);

  WateringCan = loadImage("assets/WateringCan.png");
  MidPlant = loadImage("assets/MidPlant.png");
  Pot = loadImage("assets/Pot.png");
  Room = loadImage("assets/Room.png");
  Monster = loadImage("assets/Monster.png");
  Vines = loadImage("assets/Vines.png");
  Start = loadImage("assets/Start.png");
  Here = loadImage("assets/HereSeed.png");
  Baby = loadImage("assets/BabyPlant.png");
  ClickTake = loadImage("assets/ClickTake.png");
  Wait = loadImage("assets/Wait.png");
  Click = loadImage("assets/Click.png");
  imageMode(CENTER);

}

function draw() {

  switch (state) {

    //THIS IS STARTING SCREEN
    case 0:

      image(Start, width / 2, height / 2);
      break;

      //GIVEN SEED
    case 1:
      image(Room, width / 2, height / 2);
      image(Pot, width / 2 - 14, height / 2 + 225);
      image(Here, width / 2 + 30, height / 2 - 30);
      image(ClickTake, width / 2 + 230, height / 2 + 200);
      break;

      //THIS TINY PLANT
    case 2:
      image(Room, width / 2, height / 2);
      image(Baby, width / 2 - 14, height / 2 + 178);
      image(Click, width / 2 + 250, height / 2 + 250);
      break;

      //THIS IS WATERING CUE
    case 3:
      image(Room, width / 2, height / 2);
      image(Wait, width / 2 + 250, height / 2 + 200);
      image(WateringCan, width / 2 + 50, height / 2);
      image(Baby, width / 2 - 14, height / 2 + 178);

      myTimer++;
      if (myTimer > 2 * 60) {
        myTimer = 0;
        state = 4;
      }
      break;

      //THIS IS MEDIUM PLANT
    case 4:
      image(Room, width / 2, height / 2);
      image(MidPlant, width / 2, height / 2 + 150);
      image(Click, width / 2 + 250, height / 2 + 250);
      break;

      //THIS IS WATERING CUE
    case 5:
      image(Room, width / 2, height / 2);
      image(Wait, width / 2 + 250, height / 2 + 200);
      image(MidPlant, width / 2, height / 2 + 150);
      image(WateringCan, width / 2 + 50, height / 2);
      image(Pot, width / 2 - 14, height / 2 + 225);

      myTimer++;
      if (myTimer > 2 * 60) {
        myTimer = 0;
        state = 6;
      }
      break;

      //THIS IS MONSTER PLANT
    case 6:
      laugh.play();
      image(Room, width / 2, height / 2);
      image(Monster, width / 2 + 16, height / 2 + 4);

      push();
      translate(0, y);
      avatar();
      pop();
      y = y - 2;
      if (y < -500) {
        y = 0
        y = y - 0;
      }

      function avatar() {
        image(Vines, width / 2, height / 2 + 500);
      }
      background(255, 0, 20, 50);
      myTimer++;
      if (myTimer > 8 * 60) {
        myTimer = 0;
        state = 0;
      }

      break;
  }
}

function mouseReleased() {
  state++;

}

function touchStarted() {
  getAudioContext().resume();
}
