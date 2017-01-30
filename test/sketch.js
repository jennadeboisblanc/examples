
function setup() {
  createCanvas(400, 400);
}

function draw() {
  makeSuper("Jenna");   // Jenna is super!
  makeSuper("Ian");     // Ian is super!
  makeSuper("George");  // George is super!
}

function makeSuper(name) {
  console.log(name + " is super!");
}
