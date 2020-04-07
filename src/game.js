function drawGame() {
  this.display = function () {
    strokeWeight(3);
    fill(0, 255, 0);
    rect(50, 0, 100, 30);
    fill(0, 0, 0);
    rect(WIDTH - 250, HEIGHT - 180, 100, 30);
  };
}
