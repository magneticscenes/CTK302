let state = 0;
let cat, dog, woo;

function preload() {
  cat = loadSound("assets/cat.mp3");
  dog = loadSound("assets/dog.mp3");
  woo = loadSound("assets/woo.mp3");

  cat.loop();
  cat.pause();
  dog.loop();
  dog.pause();
  woo.loop();
  woo.pause();
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background('grey');

  switch (state) {
    case 0:
      cat.play();
      state = 1;
      break;

    case 1:
      text("Listen to Song 1", width / 2, height / 2);
      break;

    case 2:
      woo.play();
      state = 3;
      break;

    case 3:
      text("Listen to Song 2", width / 2, height / 2);
      break;

    case 4:
      dog.play();
      state = 5;
      break;

    case 5:
      text("Listen to Song 3", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {

  cat.pause();
  dog.pause();
  woo.pause();

  state++;
  if (state > 5) state = 0;


}
