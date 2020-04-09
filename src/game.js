class drawGame {
  constructor() {
    this.exit = rect(100, 5, 155, 70);
    this.partNum = 5;
    this.vel = 1;
    this.passed = false;
    this.level = 0;
    this.endGame = false;
  }

  draw() {
    push();
    textFont("Roboto");
    textSize(60);
    fill(175, 245, 175);
    rect(5, 5, 155, 70);
    fill(0);
    textAlign(CENTER, CENTER);
    text(" EXIT ", 75, 45);
    pop();
  }

  // Game Over

  gameOver() {
    if (player.size <= 10) {
      // console.log("GAME OVER");
      this.endGame = true;
      console.log(this.endGame);
      textFont("Permanent Marker");
      textSize(60);
      fill(0, 0, 0);
      textAlign(CENTER, CENTER);
      text("GAME OVER", WIDTH / 2 - 50, HEIGHT / 2 - 50);
      noLoop();
    }
  }

  nextLevel() {
    if (player.pos.x < 155 && player.pos.y < 75) {
      // console.log("next level_ + level");
      this.level += 1;
      this.passed = true;
      this.partNum += 5;
      this.vel += 0.5;
      particles = [];
      player.size = 70;
      player.pos = createVector(WIDTH, HEIGHT);
      createPart(this.partNum, this.vel);
    }
  }
}
