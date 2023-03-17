// Arrays and Object Notation

let spirals = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  spawnSpiral(width/2, height/2);
}

function draw() {
  background(255);
  displaySpiral();
}

function mousePressed() {
  spawnSpiral(mouseX, mouseY);
}

function displaySpiral() {
  translate(mouseX, mouseY);
  for (let i = 0; i < 1000; i++) {
    rotate(50);
    fill(spirals[i].theColor);
    line(mouseX, mouseY, mouseX + 500, mouseY += 505);
  }
}

function spawnSpiral(tempX, tempY) {
  let newSpiral = {
    x: tempX,
    y: tempY,
    theColor: color(random(255), random(255), random(255))
  };
  spirals.push(newSpiral);
}