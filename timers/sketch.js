// Timer demo

let ballSize = 20;
let ballTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballTimer = new Timer(1000);
  ballTimer.start();
}

function draw() {
  background(220);
  fill("black");
  circle(width/2, height/2, ballSize);

  if (ballTimer.expired()) {
    ballSize += 10;
    ballTimer.start();
  }
}
