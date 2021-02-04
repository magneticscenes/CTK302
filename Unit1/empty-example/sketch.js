let day;
let night;



function setup() {
  createCanvas(500, 500);


  day = loadImage("assets/day.jpg");
  night = loadImage("assets/night.jpg");
  imageMode(CENTER);

}

function draw() {
image(day);
}
