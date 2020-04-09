let canvas;

let game;

let player;

let particles = [];

let partNumStart = 5;

let velStart = 1;

function createPart(partNum, vel) {
  for (let i = 0; i < partNum; i++) {
    particles.push(new ParticleVirus(vel));
  }
}
function setup() {
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  game = new drawGame();
  player = new drawPlayer();
  createPart(partNumStart, velStart);

  button = createButton("START GAME");
  button.size(175, 50);
  button.style("font-size:18; color:white; background-color: red");
  button.position(window.innerWidth - 275, 25);
  button.mousePressed(restartGame);
}

function draw() {
  clear();
  background(255, 255, 255);
  strokeWeight(10);
  stroke(51);
  fill(241, 241, 241);
  rect(0, 0, window.innerWidth - 100, window.innerHeight - 100);

  // Player

  player.update();
  player.draw();
  player.edges();

  //  squares - start & Exit

  // virus - Particles

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

  // Pause the game - shows the Screen with level and restart the game

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

function restartGame() {
  console.log(game.endGame);

  particles = [];
  game.passed = false;
  game.endGame = false;
  game.level = 0;
  player.size = 70;
  player.pos = createVector(WIDTH, HEIGHT);
  createPart(partNumStart, velStart);
  loop();
}
