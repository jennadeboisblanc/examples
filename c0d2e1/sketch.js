//test
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 600);
}

function draw() {
  background(500, mouseY, 600);
  rect(mouseX, 0, mouseY/5, height);
}
