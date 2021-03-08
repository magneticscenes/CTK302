var mic;
var vol;
var c = 'lavender';
let x = 0;
let velocity = 0;
let state = -1;
let timer = 0
textAlign(CENTER);

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('coral');

  switch (state) {

    case -1:
    background('pink');
      text("Click to Start", width / 2, height / 2);
      break;

    case 0:
      background('coral');
      text("shhh", width / 2, height / 2);
      break;

    case 1:
    background('red');
      text("quiet down!", width / 2, height / 2);
      timer++;
      if (timer > 2*60){
      state = 0}
      break;
  }
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) {
    // do something
    state = 1
  }

}
function mouseReleased(){
  if (state = -1){
    state = 0;
  }
}





function touchStarted() {
  getAudioContext().resume();
}
