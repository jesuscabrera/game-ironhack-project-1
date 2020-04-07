let canvas;

let playerX = WIDTH - 200;
let playerY = HEIGHT - 215;

let game;

let player;

let virus1;
let virus2;
let virus3;
let virus4;
let virus5;

function setup() {
  canvas = createCanvas(windowWidth - 100, windowHeight - 150);
  canvas.position(50, 100);
  game = new drawGame();
  player = new drawPlayer();
  virus1 = new ParticleVirus();
  virus2 = new ParticleVirus();
  virus3 = new ParticleVirus();
  virus4 = new ParticleVirus();
  virus5 = new ParticleVirus();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(255, 255, 255);
  strokeWeight(10);
  stroke(51);
  fill(241, 241, 241);
  rect(0, 0, windowWidth - 100, windowHeight - 150);

  // Player

  player.update();
  player.display();

  // Draw the game

  game.display();

  //  squares - start & Exit

  // virus - Particles

  virus1.update();
  virus1.display();

  virus2.update();
  virus2.display();

  virus3.update();
  virus3.display();

  virus4.update();
  virus4.display();

  virus5.update();
  virus5.display();
}
