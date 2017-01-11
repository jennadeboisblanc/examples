
var x = 0;
var y = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(150);
    rect(x, y, 30, 30);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      x-= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
      x+= 10;
    }
    else if (keyCode === UP_ARROW) {
      y-= 10;
    }
    else if (keyCode === DOWN_ARROW) {
      y+= 10;
    }
}
