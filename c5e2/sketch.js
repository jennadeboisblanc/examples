function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width);
}

function draw() {

  if (mouseIsPressed) {
    drawRainbowGradient();
  }
  else {
    for (var i = 0; i < width; i++) {
       stroke(i/4, width, width);
       line(i, 0, i, height);
    }
  }

}

function drawRainbowGradient() {
  for (var i = 0; i < width; i++) {
     stroke(i, width, width);
     line(i, 0, i, height);
  }
}
