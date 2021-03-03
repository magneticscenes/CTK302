let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('grey');
      text("Grey", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 50 + 10, j * 50 + 10, 25, 5);
        }
      }
      break;

    case 1:
      background('pink');
      text("Pink", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 30 + 10, j * 20 + 10, 25, 5);
        }
      }
      break;

    case 2:
      background('yellow');
      text("Yellow", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 110 + 10, j * 90 + 10, 25, 5);
        }
      }
      break;

    case 3:
      background('PaleVioletRed');
      text("Pale Violet Red", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 80 + 10, j * 50 + 10, 25, 5);
        }
      }
      break;

    case 4:
      background('orange');
      text("Orange", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 10 + 10, j * 60 + 10, 25, 5);
        }
      }
      break;

    case 5:
      background('Moccasin');
      text("Moccasin", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 50 + 10, j * 50 + 10, 25, 5);
        }
      }
      break;

  }
}

function mouseReleased() {
  state++;

  if (state > 5) {
    state = 0
  }
}
