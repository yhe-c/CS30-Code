// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let lvl_background;
let enemy_movement;
let character_img;
let character_idle;
let character_walk;
let lvl_data;
let platforms;
let character;
let enemy;
let enemy_img;
let ward_img;
let ward;

//preload images and level data
function preload() {
  lvl_background = loadImage("images/lvl_1_img.jpg");
  character_img = loadImage("images/f1.png");
  enemy_img = loadImage("images/enemy0.png");
  lvl_data = loadStrings("levels/lvl1.txt");
  ward_img = loadImage("images/ward.png");
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 12;

  platforms = new Group();
  platforms.w = width/79;
  platforms.h = height/37;
  platforms.color = "black";
  platforms.tile = "=";
  platforms.collider = "static";

  ward = new Group();
  ward.w = 5;
  ward.h = 10;
  ward.tile = "!";
  ward.img = ward_img;
  ward.scale = 1/2;
  push();
  rotate(250);
  pop();
  ward.collider = "s";

  new Tiles(
    lvl_data,
    width/3,
    0,
    platforms.w + 1,
    platforms.h + 1
  );

  character = new Sprite();
  character.img = character_img;
  character.x = width/2.8;
  character.y = height/(height/45);
  character.collider = "d";
  character.friction = 0;
  character.rotationLock = true;
  character.overlaps(ward, collect);
  character_idle = loadAni("images/f1.png");
  character_idle.frameDelay = 10;
  character.addAni("idle", character_idle);
  character_walk = loadAni("images/f1.png", "images/f2.png", "images/f3.png");
  character_walk.frameDelay = 8;
  character.addAni("walk", character_walk);

  enemy = new Sprite();
  enemy.img = enemy_img;
  enemy.scale = 1/2;
  enemy.x = width/1.75;
  enemy.y = height/3;
  enemy.collider = "d";
  enemy.rotationLock = true;
  enemy_movement = loadAni("images/enemy0.png", "images/enemy1.png", "images/enemy2.png", "images/enemy1.png");
  enemy_movement.frameDelay = 10;
  enemy.addAni("walk", enemy_movement);
  enemySequence();
}

function collect() {
  ward.remove();
}

async function enemySequence() {
  await enemy.move(50);
  enemySequence();
}

function draw() {
  clear();
  image(lvl_background, width/3, 0, width/2.72, height);
  if (kb.presses("up")) {
    character.vel.y = -7;
  }
  if (kb.pressing("left")) {
    character.ani ="walk";
    character.mirror.x = true;
    character.vel.x = -2;
  }
  else if (kb.pressing("right")) {
    character.ani ="walk";
    character.mirror.x = false;
    character.vel.x = 2;
  }
  else {
    character.ani = "idle";
    character.vel.x = 0;
  }
  //translate(random(-1,1),random(-1,1));
}