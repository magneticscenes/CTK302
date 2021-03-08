let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
switch(state){
  case 0:
  background ('salmon');
  text ("I invented a new word!", width/2, height/2);
  break;

   case 1:
   background ('gold');
   text ("Plagerism!", width/2, height/2);
   break;
}
}

function mouseReleased(){
  state++;
  if (state > 1){
    state = 0;
  }
}
