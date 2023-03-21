// Arrays and Object Notation
// Eesha
// March 20, 2023

// Extra for Experts Consideration
// Learned map() function, using a sin wave to loop animation

// creating global variables
let spiral = [];
let reps = 500;
let count = 0; 

//spawns a spiral in the middle of the screen to start
function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnSpiral(width/2, height/2);
}

//main draw loop, shows the spiral spawned
function draw() {
  background(0);
  displaySpiral(count);
}

//refreshes where the center of origin is based on the mouseX and mouseY when the mouse gets pressed
function mousePressed() {
  spawnSpiral(mouseX, mouseY);
  count++;
}

//increase and decrease amount of lines in the spiral
function mouseWheel(event) {
  if (reps < 250) { //when the lines are deacreased to be below 250 go up to 500 (to keep looking like a spiral)
    reps += 250;
  }
  else if (event.delta > 0) { // decreases amount of lines drawn
    reps -= 5;
  }
  else { //increses amount of lines drawn
    reps += 5;
  }
}
// This code creates a spiral with three random colours, and moves by itself, you can change the center of origin by clicking the mouse where you want the center to be
function displaySpiral(count) {
  let wave = sin(radians(frameCount));
  let w = wave * map(mouseX, 0, height, 2500, 0); //sin of frameCount is really small so I multiply it, used map() to multiply wave by a number based on the mouseX, closer mouseX is to the origin the speed is decreased and so is the range of motion, further mouseX is from the origin the speed is increased and so is the range of motion 
  translate(spiral[count].x, spiral[count].y);
  for (let i = 0; i < reps; i++) {
    rotate(spiral[count].rotation);
    stroke(spiral[count].theColor);
    line(width/2, i - w/2, -width/2, i++);
    //you can comment out lines if you want less or add more if desired, make sure to add more colours in object notation if you want more
    stroke(spiral[count].theColor2); 
    line(-width/2, -i + w, height/2, i++);
    stroke(spiral[count].theColor3);
    line(-width/2, i - w, width/2, i++);
  }
}

// object notation for spawning spirals
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