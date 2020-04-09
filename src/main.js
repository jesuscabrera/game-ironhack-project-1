// Define Game Variables

let canvas;
let game;
let player;
// Define an empty array for the particles / virus
let particles = [];
// Define how many particles / virus are at the Start
let partNumStart = 5;
// define how fast the particles move at the Start
let velStart = 1;
// Iterate on the particle class and create the particles
// push then on the empty array
function createPart(partNum, vel) {
  for (let i = 0; i < partNum; i++) {
    particles.push(new ParticleVirus(vel));
  }
}
// P5 default setup
function setup() {
  // Set up the Game - create the Screen
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  game = new drawGame();
  player = new drawPlayer();

  // Create the Particles / Virus
  createPart(partNumStart, velStart);

  //Create the Start Button - To restart the Game
  button = createButton("START GAME");
  button.size(175, 50);
  button.style("font-size:18; color:white; background-color: red");
  button.position(window.innerWidth - 275, 15);
  button.mousePressed(restartGame);
}
// Loop for the Game
function draw() {
  clear();

  // Create the Square for the Game
  background(255, 255, 255);
  strokeWeight(10);
  stroke(51);
  fill(241, 241, 241);
  rect(0, 0, window.innerWidth - 100, window.innerHeight - 100);

  // Player

  player.update();
  player.draw();
  player.edges();

  // Particles / Virus

  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
    p.checkDamage(particles.slice(index));
  });

  // Draw the game

  game.draw();
  game.gameOver();
  game.nextLevel();

  // Pause the game - Move on to the next Level Screen

  if (game.passed === true) {
    noLoop();
    textFont("Permanent Marker");
    textSize(40);
    fill(216, 15, 15);
    textAlign(CENTER, CENTER);
    text(
      "YOU MAKE IT TO LEVEL " + game.level + " !",
      WIDTH / 2 - 50,
      HEIGHT / 2 - 50
    );
    setTimeout(() => {
      game.passed = false;
      loop();
    }, 3000);
  }

  // restart the game
  if (game.endGame === true) {
    noLoop();
    console.log("game over");
  }
}

// To Start the Game

function restartGame() {
  console.log(game.endGame);

  particles = [];
  console.log(particles);
  console.log(partNumStart);
  console.log(game.partNum);
  game.passed = false;
  game.endGame = false;
  game.partNum = partNumStart;
  game.vel = velStart;
  game.level = 0;
  player.size = 70;
  player.pos = createVector(WIDTH, HEIGHT);
  createPart(partNumStart, velStart);
  console.log(particles);
  console.log(partNumStart);
  console.log(game.partNum);
  loop();
}
