var x = 0;
var direction = 10;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, windowHeight);
}

function draw() {
  background(100, 0, 100);

  if (x > width) direction = -direction;

  x += direction;
  ellipse(x*1, width/2 - 100, 50, 50);
}
