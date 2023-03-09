// Arrays and Object Notation

let triangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let y = 0; y < height; y+=50){
    for (let x = 0; x < width; x+=50) {
      spawnTriangles(x, y, 50, random(y/mouseY));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < triangles.length; i++) {
    displayBox(triangles[i]);
  }
}

function displayBox(myTri) {
  push(); //save transformation matrix
  translate (myTri.x, myTri.y);
  rotate(myTri.degree);
  triangle(0, 0, myTri.size);
  pop();  //reset transformation matrix
}

function spawnTriangles(theX, theY, theSize, rotation) {
  let someTri = {
    x: theX,
    y: theY,
    size: theSize,
    degree: rotation
  };
  triangles.push(someTri);
}