var x = 0;
var speed = 10;
var direction = 1;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, windowHeight);
}

function draw() {
  background(100, 0, 100);

  // if (x > width) direction = -direction;
  // if (x < 0) direction = -direction;

  x += speed * direction;
  ellipse(x*1, width/2, 50, 50);
}
