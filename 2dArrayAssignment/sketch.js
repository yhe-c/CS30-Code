// 3072 (2048 but with 3's)
// Eesha
// April 16, 2023
//
// Extra for Experts:
// Used colon as a delimiter of the ternary operator expressions, used switch statement with different cases instead of if/else if for keyboard controls, explored some array functions (.reverse, .concat, .filter)
// Note: attempted to add a high score but it kept resetting to 0 after a new game, also wanted to add sliding animation but didn't know how

// initializing global variables
const gridSize = 4;
let grid;
let cellSize;
let gameOver = false;
let complete = false;
let score = 0;

// function that resets the game with a new grid with two tiles to start
function newGame() {
  gameOver = false;
  complete = false;
  score = 0;
  grid = createEmptyGrid(gridSize, gridSize);
  // creating biggest square grid possible
  if (windowWidth < windowHeight) {
    cellSize = width/gridSize/1.5;
  }
  else {
    cellSize = height/gridSize/1.5;
  }
  addTile();
  addTile();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  newGame();
}

// main draw loop [I've seen that you can eliminate the draw loop by making an updateCanvas() function but I decided not to]
function draw() {
  translate(width/3, height/4);
  background(220);
  displayGrid();
  displayScore();
  gameOver = isGameOver();
  if (gameOver) {
    displayGameOver();
  }
  complete = isGameComplete();
  if (complete) {
    displayComplete();
  }
}

// keyboard controls
function keyPressed() {
  let flipped = false;
  let rotated = false;
  let played = false;
  switch (keyCode) {
  case RIGHT_ARROW:
    played = true;
    break;
  case LEFT_ARROW:
    grid = flipGrid(grid);
    flipped = true;
    played = true;
    break;
  case DOWN_ARROW:
    grid = transposeGrid(grid);
    rotated = true;
    played = true;
    break;
  case UP_ARROW:
    grid = transposeGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
    played = true;
    break;
  case ENTER:
    newGame();
    break;
  }

  if (played) {
    let past = copyGrid(grid);
    for (let i = 0; i < gridSize; i++) {
      grid[i] = operate(grid[i]);
    }
    if (flipped) {
      grid = flipGrid(grid);
    }
    if (rotated) {
      grid = transposeGrid(grid);
    }
    let changed = compare(past, grid);
    if (changed) {
      addTile();
    }
  }
  
}

// function that operates on the row
function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}

// function that slides all values that aren't 0 to the left
function slide(row) {
  let arr = row.filter(val => val);
  let missing = gridSize - arr.length;
  let zeros = new Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

// function that checks if two neighbouring tiles can combine
function combine(row) {
  for (let i = gridSize-1; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      row[i - 1] = 0;
      score += row[i];
    }
  }
  return row;
}

// function that flips the grid
function flipGrid(grid) {
  for (let i = 0; i < gridSize; i++) {
    grid[i].reverse();
  }
  return grid;
}

// function that rotates the grid
function transposeGrid(grid) {
  let newGrid = createEmptyGrid(gridSize, gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

// function that compares two grids, before and after you press a key, to see if there are any changes
function compare(a, b) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

// function that copies the grid before you press a key to compare
function copyGrid(grid) {
  let extra = createEmptyGrid(gridSize, gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      extra[i][j] = grid[i][j];
    }
  }
  return extra;
}

// function to check if you've reached 3072
function isGameComplete() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === 3072) {
        return true;
      }
    }
  }
  return false;
}

// function to check neighbors, see if there are anymore possible moves left
function isGameOver() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === 0) {// grid still has empty spots
        return false;
      }
      if (i !== 3 && grid[i][j] === grid[i + 1][j]) { // possible move vertically
        return false;
      }
      if (j !== 3 && grid[i][j] === grid[i][j + 1]) { // possible move horizontally
        return false;
      }
    }
  }
  return true;
}

// function that adds a tile of one of the smallest values
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
    let value = random(1) > 0.5 ? 3 : 6; //if the random number is greater than 0.5 -> value = 3, if random number is less than 0.5 -> value = 6
    grid[spot.x][spot.y] = value;
  }
}

// function that displays the grid and tiles [I'm not sure how to make this more efficient]
function displayGrid() { 
  strokeWeight(15);
  stroke("#AAAE7F");
  for(let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("#D0D6B3");
      }
      else if (grid[y][x] === 3) {
        fill("#D9ED92");
      }
      else if (grid[y][x] === 6) {
        fill("#B5E48C");
      }
      else if (grid[y][x] === 12) {
        fill("#99D98C");
      }
      else if (grid[y][x] === 24) {
        fill("#76C893");
      }
      else if (grid[y][x] === 48) {
        fill("#52B69A");
      }
      else if (grid[y][x] === 96) {
        fill("#34A0A4");
      }
      else if (grid[y][x] === 192) {
        fill("#168AAD");
      }
      else if (grid[y][x] === 384) {
        fill("#1A759F");
      }
      else if (grid[y][x] === 768) {
        fill("#1E6091");
      }
      else if (grid[y][x] === 1536) {
        fill("#184E77");
      }
      else if (grid[y][x] === 3072) {
        fill("#10344F");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize, 15);
      if (grid[y][x] > 0) {
        push();
        fill("#D0D6B3");
        strokeWeight(3);
        textAlign(CENTER, CENTER);
        textSize(cellSize/3);
        text(grid[y][x], x * cellSize + cellSize/2, y * cellSize + cellSize/2);
        pop();
      }
    }
  }
}

// function that shows your score
function displayScore() {
  push();
  fill("#D0D6B3");
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  textSize(cellSize/3);
  text("Score: " + score, windowWidth/6, -windowHeight/20);
  pop();
}

// function that draws text for when the game is over
function displayGameOver() {
  push();
  fill("black");
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  textSize(cellSize/2);
  text("Game Over", windowWidth/6.25, windowHeight/3.75);
  text("Press [enter] to restart", windowWidth/6.25, windowHeight/2.75);
  pop();
}

// function to draw text for when you've reached 3072
function displayComplete() {
  push();
  fill("black");
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  textSize(cellSize/3);
  text("You've reached 3072!", windowWidth/2, windowHeight/50);
  text("Continue playing or press", windowWidth/2, windowHeight/12);
  text("[enter] for a new game.", windowWidth/2, windowHeight/7.5);
  pop();
}

// function that creates an empty grid/grid full of zeros
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