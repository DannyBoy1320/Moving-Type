//https://blog.logrocket.com/creating-animations-p5-js/
//Sine and cosine animations
let font;
let points = [];
let r =9;
let angle = 9;
let grayValue = 0;
let angle1 = 0;
let angle2 = 0;
let scalar = 45;


function preload() {
  font = loadFont('Play/Play-Bold.ttf');
  font = loadFont('Play/Play-Regular.ttf');
}

function setup() {
  createCanvas(680, 600);
  //points = font.textToPoints('Hi', 100, 200, 200); //, x, y, x2, y2)
  rectMode(CENTER);
  points = font.textToPoints('DG', 65, 300, 310,{
    sampleFactor:1.25,
    simplifyThreshold:0
  }); //, x, y, x2, y2)
  print(points);

  angleMode(DEGREES);

}

function draw() {

  background(grayValue);
  fill('red')
  for (let i = 2; i < points.length; i++) {
    ellipse(points[i].x , points[i].y+ r * sin(angle + i*26), 8, 7);
  }
  angle += 250;
  let ang1 = radians(angle1);
  let ang2 = radians(angle2);

  let x1 = width / 2 + scalar * cos(ang1);
  let x2 = width / 2 + scalar * cos(ang2);

  let y1 = height / 2 + scalar * sin(ang1);
  let y2 = height / 2 + scalar * sin(ang2);

  //fill(255);
  // rect(width * 0.5, height * 0.5, 150, 140);

} 

// Generate a random number between 0 and 255 for the grayValue variable once after each mouse press
function mousePressed() {
  grayValue = random(255);
  
}
