// Cubic Disarray

let boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);


  for (let y = 0; y < height; y+=50){
    for (let x = 0; x < width; x+=50) {
      spawnBoxes(x, y, 50, random(y/mouseY));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < boxes.length; i++) {
    displayBox(boxes[i]);
  }
}

function displayBox(myBox) {
  push(); //save transformation matrix
  translate (myBox.x, myBox.y);
  rotate(myBox.degree);
  square(0, 0, myBox.size);
  pop();  //reset transformation matrix
}

function spawnBoxes(theX, theY, theSize, rotation) {
  let someBox = {
    x: theX,
    y: theY,
    size: theSize,
    degree: rotation
  };
  boxes.push(someBox);
}
