// 2048 But You Can't Get To 2048
// Eesha
// April 6, 2023
//
// Extra for Experts:
// Used colon as a delimiter of the ternary operator expressions, 

let grid;
const ROWS = 4;
const COLS = 4;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createStartingGrid(ROWS, COLS);
  //creating biggest square grid possible
  if (windowWidth < windowHeight) {
    cellSize = width/ROWS/1.5;
  }
  else {
    cellSize = height/COLS/1.5;
  }

}

function draw() {
  translate(width/3, height/4);
  background(220);
  displayGrid();
  addTile();
}

function keyTyped() {
  if (key === "r") { //restart with an empty grid
    grid = createStartingGrid(ROWS, COLS);
  }
  else if (key === "UP_ARROW") { //moves all blocks up if possible
    moveBlocksUp();
  }
  else if (key === "DOWN_ARROW") { //moves all blocks down if possible
    moveBlocksDown();
  }
  else if (key === "LEFT_ARROW") { //moves all blocks left if possible
    moveBlocksLeft();
  }
  else if (key === "RIGHT_ARROW") { //moves all blocks right if possible
    moveBlocksRight();
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

function addTile() {
  let options = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) { 
        options.push({x: i, y: j}); 
      }
    }
  }
  if (options.length > 0) { 
    let spot = random(options); 
    let value = random(1) > 0.5 ? 2 : 4; //if the random number is greater than 0.5 -> value = 2, if random number is less than 0.5 -> value = 4
    grid[spot.x][spot.y] = value;
  }
}

function displayGrid() { //functiont that displays the grid
  strokeWeight(15);
  stroke("#AAAE7F");
  for(let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        fill("#D0D6B3");
      }
      else if (grid[y][x] === 1) {
        fill("#D9ED92");
      }
      else if (grid[y][x] === 2) {
        fill("#B5E48C");
      }
      else if (grid[y][x] === 3) {
        fill("#99D98C");
      }
      else if (grid[y][x] === 4) {
        fill("#76C893");
      }
      else if (grid[y][x] === 5) {
        fill("#52B69A");
      }
      else if (grid[y][x] === 6) {
        fill("#34A0A4");
      }
      else if (grid[y][x] === 7) {
        fill("#168AAD");
      }
      else if (grid[y][x] === 8) {
        fill("#1A759F");
      }
      else if (grid[y][x] === 9) {
        fill("#1E6091");
      }
      else if (grid[y][x] === 10) {
        fill("#184E77");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize, 15);
      if (grid[y][x] > 0) {
        push();
        fill("#D0D6B3");
        strokeWeight(3);
        textAlign(CENTER, CENTER);
        textSize(35);
        text(grid[y][x], x * cellSize + cellSize/2, y * cellSize + cellSize/2);
        pop();
      }
    }
  }
}

function createStartingGrid(ROWS, COLS) { //function that restarts the game/resets the grid
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}