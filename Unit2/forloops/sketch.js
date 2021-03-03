function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('green');

  for (let j = 0; j < 30; j++) {
  for (let i = 0; i < 30; i++) {
      fill(random(255));
  rect(i*30, j*30, 5, 15);
}
}
}
