let DAYsmall;
let NIGHTsmall;

function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

  DAYsmall = loadImage("assets/DAYsmall.jpg");
  NIGHTsmall = loadImage("assets/NIGHTsmall.jpg");
  imageMode(CENTER);
  textAlign(CENTER);
}



function draw() {


  image(DAYsmall, width / 2, height / 2);
  if (mouseIsPressed) {
    image(NIGHTsmall, width / 2, height / 2);
  }

  noStroke();

  push();
  translate(60, 80);



    //back shoulder
  fill(84, 130, 93);
  quad(615, 396, 551, 455, 478, 597, 541, 665);
  fill(112, 184, 126);
  quad(470, 492, 414, 591, 528, 603, 522, 501);
  quad(414, 590, 528, 600, 533, 685, 413, 678);

  //shirt base
  fill(76, 122, 83);
  quad(617, 351, 548, 479, 526, 577, 702, 402);
  ellipse(694, 482, 120, 160);
  quad(722, 413, 764, 467, 825, 695, 839, 780);
  quad(526, 577, 764, 467, 845, 800, 503, 823);
  quad(619, 418, 694, 542, 503, 823, 526, 577);
  if (mouseIsPressed) {
    //back shoulder
  fill(139, 135, 202);
  quad(615, 396, 551, 455, 478, 597, 541, 665);
  fill(112, 184, 126);
  quad(470, 492, 414, 591, 528, 603, 522, 501);
  quad(414, 590, 528, 600, 533, 685, 413, 678);

  //shirt base
  fill(76, 122, 83);
  quad(617, 351, 548, 479, 526, 577, 702, 402);
  ellipse(694, 482, 120, 160);
  quad(722, 413, 764, 467, 825, 695, 839, 780);
  quad(526, 577, 764, 467, 845, 800, 503, 823);
  quad(619, 418, 694, 542, 503, 823, 526, 577);
  }

  //DESK
  push();
  translate(0, 35);
  fill(92, 72, 50);
  quad(705, 760, 449, 595, -100, 600, -100, 760);
  fill(123, 96, 65)
  quad(-100, 760, 703, 760, 705, 800, -100, 800);
  pop();
  //back sleeve
  fill(96, 159, 108);
  quad(470, 492, 414, 591, 528, 603, 522, 501);
  quad(414, 590, 528, 600, 533, 685, 413, 678);

  //back cuff
  fill(112, 184, 186);
  quad(460, 473, 508, 466, 512, 510, 470, 516);
  if (mouseIsPressed) {
    //back sleeve
    fill(96, 159, 108);
    quad(470, 492, 414, 591, 528, 603, 522, 501);
    quad(414, 590, 528, 600, 533, 685, 413, 678);

    //back cuff
    fill(198, 202, 135);
    quad(460, 473, 508, 466, 512, 510, 470, 516);
  }
  //back hand back palm
  fill(209, 159, 135);
  quad(492, 460, 479, 413, 437, 435, 448, 467);
  //back hand back fingers
  quad(437, 465, 413, 447, 423, 423, 448, 432);
  quad(448, 463, 424, 461, 417, 440, 439, 423);
  //back hand middle fingers
  fill(246, 189, 162);
  quad(448, 463, 424, 461, 417, 440, 439, 423);
  //back hand front fingers
  fill(255, 203, 164);
  ellipse(480, 466, 60, 35);
  triangle(450, 439, 432, 442, 450, 454);
  quad(469, 482, 440, 443, 420, 443, 436, 469);
  quad(420, 443, 440, 443, 450, 439, 435, 434);

  //head shape
  fill(255, 180, 141);
  ellipse(432, 398, 30, 25);
  ellipse(468, 372, 50, 15);
  fill(255, 203, 164);
  ellipse(460, 417, 60, 25);
  ellipse(474, 432, 60, 18);
  circle(508, 301, 200);

  triangle(429, 408, 480, 466, 549, 419);
  quad(431, 409, 426, 356, 587, 350, 549, 419);

  fill(255, 180, 141);
  ellipse(473, 376, 50, 15);
  fill(255, 203, 164);
  //neck
  quad(544, 418, 601, 333, 635, 395, 582, 441);

  //collar
  fill(112, 184, 186)
  quad(630, 366, 652, 385, 568, 472, 558, 445);


  //pencil
  fill(194, 208, 111)
  quad(264, 678, 328, 598, 318, 593, 254, 674);

  //front hand back fingers
  fill(255, 180, 141);
  quad(268, 618, 283, 625, 273, 649, 264, 647);
  triangle(273, 649, 264, 647, 270, 658);
  quad(276, 653, 282, 662, 292, 670, 298, 658);
  quad(298, 678, 288, 670, 315, 668, 304, 678);
  quad(318, 685, 306, 682, 322, 668, 330, 671);
  //front hand middle fingers
  fill(255, 199, 164);
  quad(304, 611, 268, 619, 273, 630, 312, 628);
  quad(312, 628, 276, 653, 282, 662, 314, 642);
  quad(304, 638, 313, 649, 298, 678, 288, 670);
  quad(320, 640, 308, 645, 306, 682, 318, 685);
  //front hand base
  fill(254, 210, 182);
  quad(374, 690, 362, 641, 304, 611, 312, 658);

  //cuff
  fill(112, 184, 186);
  quad(350, 625, 395, 630, 397, 695, 366, 690);
  //sleeve
  fill(112, 184, 126);
  ellipse(680, 505, 140, 150);
  quad(611, 492, 748, 512, 696, 639, 533, 633);
  quad(388, 626, 397, 708, 630, 743, 696, 639);

  //backbun
  fill(111, 166, 122);
  circle(525, 195, 90);

  //hair
  fill(112, 184, 126);
  arc(410, 282, 120, 90, 0, -PI - QUARTER_PI);
  arc(410, 270, 120, 90, 0, -PI - QUARTER_PI);
  arc(420, 240, 120, 90, 0, -PI - QUARTER_PI);
  arc(565, 270, 120, 90, 0, -PI - QUARTER_PI);
  arc(513, 307, 100, 100, 0, -PI + QUARTER_PI);
  arc(508, 301, 220, 220, 0, HALF_PI);
  arc(508, 301, 220, 220, PI, PI - HALF_PI - 20, );

  //frontbun
  circle(618, 227, 100);


  //eye
  fill(255);
  triangle(452, 358, 472, 351, 462, 368);
  strokeWeight(4);
  stroke(5);
  line(447, 358, 476, 347);
  line(451, 358, 459, 366);

  strokeWeight(1);
  line(474, 348, 462, 367);
  line(466, 335, 435, 350);

  pop();

  fill(168, 94, 113, 50);
  rect(0, 800, 10000, 8000);
  if (mouseIsPressed) {
    fill(63, 80, 186, 15);
    rect(0, 800, 10000, 8000);
  }

  fill(0, 150);
  text('Hilda likes to sit with her cat', 250, 765);
  text('and write on her desk, day and night.', 250, 780);
}

// this shows mouse location - comment it out when you're done!

//fill(0);
// text(mouseX + ", " + mouseY, 40, 40);







// record the mouse location in console when clicked
//function mouseReleased() {
// print(mouseX + ", " + mouseY);
