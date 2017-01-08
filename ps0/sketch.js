//test
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 600);
}

function draw() {
  background(255);
  fill(mouseX, 600, 600);
  line(0, mouseY, mouseX, mouseY);
}
