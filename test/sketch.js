var tacos = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 10; i++) {
    tacos[i] = new Taco("pork");
  }
  console.log(tacos);
}

function draw() {
  background(255);
  for (var i = 0; i < 10; i++) {
    tacos[i].display();
  }
}

function Taco(type) {
  this.type = type;

  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    fill(255, 255, 0);
    arc(this.x, this.y, 80, 80, 0, PI+QUARTER_PI, CHORD);
    fill(0);
    text(this.type, this.x, this.y);
  }
}
