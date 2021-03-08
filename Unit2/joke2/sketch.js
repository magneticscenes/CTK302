let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
switch(state){
  case 0:
  background ('lavender');
  text ("Why do we tell actors to break a leg?", width/2, height/2);
  break;

   case 1:
   background ('teal');
   text ("Because every play has a cast.", width/2, height/2);
   break;
}

timer++
if (timer > 3*60){
  state++;
  timer = 0;
  if (state > 1){
    state = 0;
  }
}
}
