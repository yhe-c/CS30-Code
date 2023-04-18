// Fireworks OOP Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Spark {
  constructor(x, y, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 255;
    this.size = 5;
    this.gravity = 0.5;
  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.alpha--;
    this.y += this.gravity;
  }
  isDead() {
    return this.alpha <= 100;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = fireworks.length -1; i >= 0 ; i--) {    
    fireworks[i].update();
    fireworks[i].display();
    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
  }
}

function spawnSpark(r, g, b) {
  let theSpark = new Spark(mouseX, mouseY, random(-5, 5), random(-5, 5), r, g, b);
  fireworks.push(theSpark);
}

function mousePressed() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  for (let i = 0; i < 100; i++) {
    spawnSpark(r, g, b);
  } 
}