var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1ZBE6IioWvqKD8vorXu5PZ443NyfraHSSb356GmpVekU';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Animal, data[i].Color)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('gray');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myAnimal, myColor) {
    this.name = myName;
    this.animal = myAnimal;
    this.color = myColor;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);
  }


  display() {

    // ellipse(this.pos.x, this.pos.y, 50, 50);
    // fill('black');
    // text(this.name, this.pos.x, this.pos.y);
 //    if (this.color == 'red') {
 //      //strokeWidth(10);
 //      //fill(this.color);
 //      fill('red');
 // }
 //else {
    //   fill('blue');
    // }
      if (this.animal == "Cat"){

        fill(this.color);
      triangle(this.pos.x - 20, this.pos.y + 10, this.pos.x - 10, this.pos.y - 20, this.pos.x - 40, this.pos.y - 30, );
      triangle(this.pos.x + 20, this.pos.y + 10, this.pos.x + 5, this.pos.y - 20, this.pos.x + 40, this.pos.y - 30, );
      ellipse(this.pos.x, this.pos.y, 50, 50);
      fill('black');
      text(this.name, this.pos.x, this.pos.y);
    } else {

      fill(this.color);
      triangle(this.pos.x, this.pos.y, this.pos.x - 40, this.pos.y - 30, this.pos.x - 40, this.pos.y + 30, );
      ellipse(this.pos.x, this.pos.y, 50, 50);
      fill('black');
      text(this.name, this.pos.x, this.pos.y);
    }
    //   fill('black');
    //   text(this.name, this.pos.x, this.pos.y);
    // }
      // triangle(this.pos.x - 20, this.pos.y, this.pos.x - 10, this.pos.y - 20, this.pos.x - 40, this.pos.y - 30, );
      // triangle(this.pos.x + 5, this.pos.y + 10, this.pos.x + 5, this.pos.y - 20, this.pos.x + 40, this.pos.y - 30, );
      // ellipse(this.pos.x, this.pos.y, 50, 50);
      // fill('black');
      // text(this.name, this.pos.x, this.pos.y);
   }


    // if (this.shape == "Dog") {
    // rect(this.pos.x, this.pos.y, 50, 50);
    // text(this.name, this.pos.x, this.pos.y);
    // }
    // if (this.shape == "Horse") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    //text(this.name, this.pos.x, this.pos.y);


  drive() {
    this.pos.x += this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }
}
