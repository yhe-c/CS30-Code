// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < 10000; i ++) {
    rotate(90);
    curve(mouseX, mouseY, mouseX + 25, mouseY + 100, mouseX + 50, mouseY + 200);
  }
}

