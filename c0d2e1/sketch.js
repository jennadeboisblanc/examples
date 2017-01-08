//test
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 255, 255);

  fill(0, 0, 600/255);
  rect(mouseX, 0, mouseY/5, height);
}
