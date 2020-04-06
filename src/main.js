var canvas;

var playerX = 1200;
var playerY = 750;

function setup() {
  canvas = createCanvas(windowWidth - 100, windowHeight - 150);
  canvas.position(50, 100);
  background(255, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(241, 241, 241);
  fill(0, 255, 0);
  ellipse(playerX, playerY, 50, 50);

  // test the movement we dont need a grid!
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      playerX += 5;
    } else if (keyCode == LEFT_ARROW) {
      playerX -= 5;
    } else if (keyCode == UP_ARROW) {
      playerY -= 5;
    } else if (keyCode == DOWN_ARROW) {
      playerY += 5;
    }
  }
}
