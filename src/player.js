function drawPlayer() {
  this.display = function () {
    fill(0, 255, 0);
    strokeWeight(3);
    ellipse(playerX, playerY, 50, 50);
  };

  this.update = function () {
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
  };
}
