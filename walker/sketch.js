// OOP Walker Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.size = 5;
  }
  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}

let dio;
let jojo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dio = new Walker(width/2, height/2);
  jojo = new Walker(200, 400);
  jojo.color = "blue";
}

function draw() {
  dio.move();
  jojo.move();
  dio.display();
  jojo.display();
}
