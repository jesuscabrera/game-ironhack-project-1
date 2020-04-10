// Define Game Variables

let canvas;
let game;
let player;

let virusSound;

function preload() {
  virusSound = loadSound("assets/And-the-Machines-Came-at-Midnight.mp3");
}

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

  // load the sound

  virusSound.loop();

  // Create the Particles / Virus
  createPart(partNumStart, velStart);

  //Create the Start Button - To restart the Game
  button = createButton("START GAME");
  button.size(175, 50);
  button.style("font-size:18; color:white; background-color: red");
  button.position(window.innerWidth - 275, 20);
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

  // Sound

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

  // Start the Game

  if (game.startGame === false) {
    noLoop();

    fill(255, 175);
    rect(0, 0, WIDTH, HEIGHT);
    textFont("Permanent Marker");
    textSize(16);
    fill(216, 15, 15);
    textAlign(CENTER, CENTER);
    text(
      `
      Covid-19 - Ironhack Game
      
      The objetive of the Game is to arrive to the exit 
      without been touched for the virus. 
      
      Every time a virus is touched some live (green circle around the player) 
      is lost. When the all the life (green circle) ist lost, the game is over.

      Every time the user arrives to the Exit, 
      one level is increased and the speed and amount of virus is also increased.
      
      To control the game - use the arrow keys.
      
      Press the button to start / restart the game.

      Good Luck! Have fun! Stay healthy! 

      `,
      WIDTH / 2 - 50,
      HEIGHT / 2 - 50
    );
  } else if (game.startGame === true) {
    loop();
  }

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
    // console.log("game over");
  }
}

// To Start the Game - Reset values to start point

function restartGame() {
  particles = [];
  game.passed = false;
  game.startGame = true;
  game.endGame = false;
  game.partNum = partNumStart;
  game.vel = velStart;
  game.level = 0;
  player.size = 70;
  player.pos = createVector(WIDTH, HEIGHT);
  createPart(partNumStart, velStart);
  loop();
}
