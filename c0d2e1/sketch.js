//test
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 600);
}

function draw() {
  background(400, mouseY, 600);
  rect(mouseX, 0, mouseY, height);
}
