let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
//rect(x, 100, 100, 100);

fill(255);
textSize(18);
text("BREAKING NEWS: DOG ON THE RUN.  SHIBA KNOCKS OVER VASE.  SAYS HE FEELS REALLY BAD ABOUT IT.", x, height/2);

x = x + 2;

if (x > width){
  x = -1000
}
}
