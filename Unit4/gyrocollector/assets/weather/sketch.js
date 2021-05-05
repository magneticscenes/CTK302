// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var Sun;
var cloud;

function setup() {
  createCanvas(400, 400);

  Sun = loadImage("assets/happysun.jpg");
  cloud = loadImage("assets/cloud.png");
  imageMode(CENTER);
  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=5f39683b3aec6ea0b1c79117eb9b2b2b'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      image(Sun, width/2, height/2);

      fill('black');
      textSize(20);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed is " + windspeed, 55, 40);
text("Temperature is " + temperature, 55, 60);
text("Humidity is " + humidity, 55, 80);


      // cloud
      image(cloud, x, height/2, 150, 50);
      //ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
