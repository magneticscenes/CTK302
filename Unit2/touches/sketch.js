let numberOfTouches;
let dog1;
let dog2;
let dog3;

function setup() {
  createCanvas(600, 600);
    dog = loadImage("assets/dog.png");
  dog1 = loadImage("assets/dog1.jpg");
  dog2 = loadImage("assets/dog2.jpg");
  dog3 = loadImage("assets/dog3.jpg");
  imageMode(CENTER);
}

function draw() {
//  background('grey');
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 50, 50);

  switch (numberOfTouches) {
    case 0:
      fill("black");
      textSize(40);
      text("no dogs", 100, 100);
      break;

    case 1:
      text("a dog!", 100, 100);
        image(dog, width / 2, height / 2, 100, 100);
      break;

    case 2:
      text("two dogs?!", 100, 100);
      image(dog, width / 2, height / 2, 100, 100);
      image(dog, width / 2+100, height / 2, 100, 100);
      break;

    case 3:
      text("heaven.", 100, 100);
      image(dog, width / 2, height / 2, 100, 100);
          image(dog, width / 2+100, height / 2, 100, 100);
              image(dog, width / 2-100, height / 2, 100, 100);
      break;
  }

}
