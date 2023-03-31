// 2048 But You Can't Get To 2048
// Eesha
// April 6, 2023
//
// Extra for Experts:
// 

let grid;
const ROWS = 4;
const COLS = 4;
let cellSize;
let blockX = 0;
let blockY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(ROWS, COLS);
  //creating biggest square grid possible
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  cellSize = width/ROWS;
}

function draw() {
  translate(width/4, 0);
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") { //restart with an empty grid
    grid = createEmptyGrid(ROWS, COLS);
  }
  else if (key === "UP_ARROW") { //moves all blocks up if possible
    moveBlocksUp;
  }
  else if (key === "DOWN_ARROW") { //moves all blocks down if possible
    moveBlocksDown;
  }
  else if (key === "LEFT_ARROW") { //moves all blocks left if possible
    moveBlocksLeft;
  }
  else if (key === "RIGHT_ARROW") { //moves all blocks right if possible
    moveBlocksRight;
  }
}

function moveBlocksUp() {
  
}

function moveBlocksDown() {

}

function moveBlocksLeft() {

}

function moveBlocksRight() {

}

function displayGrid() { //functiont that displays the grid
  for(let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        strokeWeight(5);
        fill("white");
        rect(x * cellSize, y * cellSize, cellSize, cellSize, 15);
      }
    }
  }
}

function createEmptyGrid(ROWS, COLS) { //function that restarts the game/resets the grid
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}