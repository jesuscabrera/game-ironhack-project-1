let canvas;

let playerX = WIDTH - 200;
let playerY = HEIGHT - 215;

let game;

let player;

let virus = [];

function setup() {
  canvas = createCanvas(windowWidth - 100, windowHeight - 150);
  canvas.position(50, 100);
  game = new drawGame();
  player = new drawPlayer();

  for (var i = 0; i < 75; i++) {
    virus.push(new ParticleVirus());
  }
}

function randomParticles() {}

console.log(virus);

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

  for (var i = 0; i < virus.length; i++) {
    virus[i].update();
    // virus[i].edges();
    virus[i].display();
  }
}
