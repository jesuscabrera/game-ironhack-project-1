let canvas;

let game;

let player;

let particles = [];

let particlesLength;
function createPart(partNum, vel) {
  for (let i = 0; i < partNum; i++) {
    particles.push(new ParticleVirus(vel));
  }
}
function setup() {
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  game = new drawGame();
  player = new drawPlayer();
  createPart(30, 2);
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

  console.log(game.passed);

  if (game.passed === true) {
    noLoop();
    textFont("Permanent Marker");
    textSize(50);
    fill(216, 15, 15);
    textAlign(CENTER, CENTER);
    text("YOU MAKE IT ! NEXT LEVEL ", WIDTH / 2, HEIGHT / 2);
    setTimeout(() => {
      game.passed = false;
      loop();
      console.log("es falfalso", this.passed);
    }, 2000);
  }
}
