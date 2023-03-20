// Arrays and Object Notation
// Eesha
// March 20, 2023

// Extra for Experts Consideration
// 


let spiral = [];
let reps = 750;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES);
  spawnSpiral(width/2, height/2);
}

function draw() {
  background(0);
  displaySpiral(count);
}

function mousePressed() {
  spawnSpiral(mouseX, mouseY);
  count++;
}

function mouseWheel(event) {
  if (reps < 250) {
    reps += 250;
  }
  else if (event.delta > 0) {
    reps -= 5;
  }
  else {
    reps += 5;
  }
}

function displaySpiral(count) {
  translate(spiral[count].x, spiral[count].y);
  // for (let i = 0; i < reps; i++) {
  //   rotate(spiral[count].rotation);
  //   stroke(spiral[count].theColor);
  //   line(width, i+=5, mouseX - width, mouseY - width/2);
  // }

  
  let wave = sin(radians(frameCount));
  let w = wave * map(mouseX, 0, height, 2500, 0);
  for (let i = 0; i < 500; i++) {
    rotate(spiral[count].rotation);
    stroke(spiral[count].theColor);
    line(850, i - w/2, -850, i++);
    stroke(spiral[count].theColor2);
    line(-850, -i + w, 550, i++);
    stroke(spiral[count].theColor3);
    line(-850, i - w, 850, i++);
  }
}

function spawnSpiral(tempX, tempY) {
  let newSpiral = {
    x: tempX,
    y: tempY,
    rotation: random(360),
    theColor: color(random(255), random(255), random(255)),
    theColor2: color(random(255), random(255), random(255)),
    theColor3: color(random(255), random(255), random(255))
  };
  spiral.push(newSpiral);
}