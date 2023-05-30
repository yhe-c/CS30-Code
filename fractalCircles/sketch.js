// Fractal Circles Demo

let theColors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "grey", "white", "black"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let theDepth = Math.floor(map(mouseX, 0, width, 0, 10));
  fractalCircle(width/2, width, theDepth);
}

function fractalCircle(x, dia, depth) {
  fill(theColors[depth]);
  circle(x, height/2, dia);
  if (depth > 0) {
    depth--;
    fractalCircle(x - dia/4, dia/2, depth);
    fractalCircle(x + dia/4, dia/2, depth);
  }
}