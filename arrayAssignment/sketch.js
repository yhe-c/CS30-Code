// Arrays and Object Notation

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  fill("yellow");
  for (let i = 0; i < 10000; i++) {
    rotate(15);
    triangle(mouseX + width/4, i+=5, mouseY, i++, mouseX + 250, i+=5);
  }
  
}