// Ball Array OOP Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.rad = random(10, 40);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(100, 255);
  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.rad*2);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    // collision
    if (this.x - this.rad <= 0 || this.x + this.rad >= width) {
      this.dx *= -1;
    }
    if (this.y - this.rad <= 0 || this.y + this.rad >= height) {
      this.dy *= -1;
    }
  }
  collision(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.rad + otherBall.rad;
    if (distanceApart < radiiSum) {
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let someBall of ballArray) {
    someBall.update();
    for (let otherBall of ballArray) {
      if (someBall !== otherBall) {
        someBall.collision(otherBall);
      }
    }
    someBall.display();
  }
}

function mousePressed() {
  let ball = new Ball(mouseX, mouseY);
  ballArray.push(ball);
}