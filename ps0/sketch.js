//test
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 600);
}

function draw() {
  background(600);
  stroke(mouseX, 600, 600);
  line(0, mouseY, mouseX, mouseY);
}
