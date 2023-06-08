// Sierpinski Triangle Demo

let triangleVerticies = [
  {x: 500, y: 50},
  {x: 50, y: 750},
  {x: 950, y: 750}
];
let theColors = ["red", "yellow", "orange", "blue", "grey", "pink", "purple", "green", "white"];
let depth = 0;

function setup() {
  createCanvas(1000, 800);
  noStroke();
}

function draw() {
  background(220);
  sierpinski(triangleVerticies, depth);
}

function mousePressed() {
  if (depth < 8){
    depth++;
  }
}

function sierpinski(points, depth) {
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if (depth > 0) {
    sierpinski([getMidpoint(points[0], points[1]), points[1], getMidpoint(points[1], points[2])], depth-1); //left
    sierpinski([getMidpoint(points[0], points[2]), getMidpoint(points[1], points[2]), points[2]], depth-1); //right
    sierpinski([points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], depth-1); //top
  }
}

function getMidpoint(p1, p2) {
  let xDiff = p1.x + p2.x;
  let yDiff = p1.y + p2.y;
  let theMidpoint = {x: xDiff/2, y: yDiff/2};
  return theMidpoint;
}