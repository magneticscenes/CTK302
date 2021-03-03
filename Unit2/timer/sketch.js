let myState = 0
let myTimer = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {
textAlign(CENTER);
switch(myState){
  case 0:
background('Plum');
textSize(20)
text("Plum is a pretty neat color", width/2, height/2);
myTimer++ ;
if (myTimer > 3*60){
  myTimer = 0 ;
  myState = 1 ;
}
  break;

  case 1:
background('Thistle');
textSize(20)
text("Thistle is a fantabulous color", width/2, height/2);
myTimer++ ;
if (myTimer > 3*60){
  myTimer = 0 ;
  myState = 2 ;
}
  break;

  case 2:
background('Lavender');
textSize(20)
text("Lavender is an okay color", width/2, height/2);
myTimer++ ;
if (myTimer > 3*60){
  myTimer = 0 ;
  myState = 0 ;
}
  break;





}
}
