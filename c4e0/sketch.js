
var x = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {

   if(mouseIsPressed) {
     background(0, 255, 0);
     textSize(30);
     text("CLICKED!", 100, width/2);
   }
   else {
     background(0, 255, 255);
     textSize(15);
     text("click me", 100, width/2);
   }

}
