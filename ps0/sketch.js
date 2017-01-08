//test
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, windowHeight);
}

function draw() {
  background(windowHeight);
  stroke(mouseX, windowHeight, windowHeight);
  line(0, mouseY, mouseX, mouseY);
}
