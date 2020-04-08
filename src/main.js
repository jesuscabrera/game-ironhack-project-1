let canvas;

let game;

let player;

const particles = [];

let particlesLength;

function setup() {
  createCanvas(window.innerWidth - 100, window.innerHeight - 100);
  game = new drawGame();
  player = new drawPlayer();
  let particlesLength = 30;
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new ParticleVirus());
  }
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
  game.nextCountry();
}
