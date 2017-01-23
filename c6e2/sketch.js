function setup() {
  createCanvas(400, 400);
}

function draw() {

  // your code here
  stickFigure(50, 180);
  stickFigure(150, 170);
  stickFigure(250, 100);
  stickFigure(350, 50);
}

function stickFigure(x, personHeight) {
  personHeight *= 2;  // making stick people 2x the height in pixels
  fill(150);
  strokeWeight(3);

  // head
  noFill();
  stroke(0);
  ellipse(x, height-personHeight+personHeight/12, personHeight/6);

  // body
  fill(0);
  line(x, height-personHeight+personHeight/6, x, height-personHeight/3);

  // legs
  line(x-10, height, x, height-personHeight/3);
  line(x+10, height, x, height-personHeight/3);

  // arms
  line(x-10, height-personHeight/2, x, height-personHeight/3*2);
  line(x+10, height-personHeight/2, x, height-personHeight/3*2);

  // height text
  textWidth(14);
  strokeWeight(0);
  text(personHeight/2 + " cm", x-textWidth(personHeight + " cm")/2, height-personHeight -10);
}
