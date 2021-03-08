var mic;
var vol;
var c = 'lavender';
let x = 0 ;
let velocity = 0;
textAlign(CENTER);

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  fill('purple');
  rect(x, 300, 80, 80);
  fill('white');
  text("Noises \nScare \nMe", x, 320);

  x = x + velocity;
  if (x > width){
    x = 0
  }


  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) {
    // do something
    velocity = 5

    //took this out because I have epilepsy
   // c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
   }


else {velocity = 0};
  // extra stuff for debugging
  fill('black');
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
