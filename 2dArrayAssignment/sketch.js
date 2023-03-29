// 2048 But You Can't Get To 2048
// Eesha
// April 6, 2023
//
// Extra for Experts:
// 

let grid;
const ROWS = 5;
const COLS = 5;
let cellSize;
let blockX = 0;
let blockY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(ROWS, COLS);
  //creating biggest square grid possible
  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") { //restart with an empty grid
    grid = createEmptyGrid(ROWS, COLS);
  }
  else if (key === "UP_ARROW") {
    moveBlocks(0, -1);
  }
  else if (key === "DOWN_ARROW") {
    moveBlocks(0, 1);
  }
  else if (key === "LEFT_ARROW") {
    moveBlocks(-1, 0);
  }
  else if (key === "RIGHT_ARROW") {
    moveBlocks(1, 0);
  }
}

function moveBlocks(x, y) {
  while (blockX + x >= 0 && blockX + x < COLS && blockY + y >= 0 && blockY + y < ROWS) {
    if (grid[blockY + y][blockX + x] === 0) {
      let tempX = blockX;
      let tempY = blockY;
    
      blockX += x;
      blockY += y;
    
      //update grid
      grid[blockY][blockX] = 9;
      grid[tempY][tempX] = 0;
    }
  }
}

function displayGrid() {
  for(let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("yellow");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        text("2", grid[x]/2, grid[y]/2);
      }
    }
  }
}

function createEmptyGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}