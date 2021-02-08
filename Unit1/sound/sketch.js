let song1;

function preload() {
song1 = loadSound("assets/downtown.mp3");
}

function setup() {
  createCanvas(500, 500);

}


function draw() {
  background (150);
}

function mouseReleased () {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
  song1.loop();
}
// add these to programs that use sound, at the bottomfunction
touchStarted() {
  getAudioContext().resume();
}
}
