let font;
let points = [];
let r =2;
let angle = 0;
function preload() {
  font = loadFont('Play/Play-Bold.ttf');
  font = loadFont('Play/Play-Regular.ttf');
}

function setup() {
  createCanvas(600, 600);
  //points = font.textToPoints('Hi', 100, 300, 300); //, x, y, x2, y2)

  points = font.textToPoints('DG', 50, 300, 300,{
    sampleFactor:0.2,
    simplifyThreshold:0
  }); //, x, y, x2, y2)
  print(points);

  angleMode(DEGREES);

}

function draw() {
  background(10);
  fill ('blue')
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x , points[i].y+ r * sin(angle + i*25), 10, 15);
  }
  angle += 10;
}
