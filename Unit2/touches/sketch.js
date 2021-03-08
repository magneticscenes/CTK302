let numberOfTouches ;
let dog1;
let dog2;
let dog3;

function setup() {
  createCanvas(400, 400);
  Dog1 = loadImage("assets/dog1.jpg");
  Dog2 = loadImage("assets/dog2.jpg");
  Dog3 = loadImage("assets/dog3.jpg");
  imageMode(CENTER);
}

function draw() {
  background('grey');
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
    fill("white");
    textSize(40);
      text("no dogs", 5, 22) ;
      break ;

      case 1:
       text("a dog!", 5, 22) ;
image(dog1, width/2, height/2 +200, 300, 200);
      break ;

      case 2:
      text("two dogs?!", 5, 22) ;
image(dog2, width/2, height/2 +200, 300, 200);
      break ;

      case 3:
     text("heaven.", 5, 22) ;
  image(dog3, width/2, height/2 +200, 300, 200);
      break ;
  }

}
