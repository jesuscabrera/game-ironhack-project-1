class drawGame {
  constructor() {
    this.exit = rect(100, 5, 155, 70);
    this.partNum = 30;
    this.vel = 2;
    this.passed = false;
  }

  draw() {
    push();
    textFont("Roboto");
    textSize(60);
    fill(175, 245, 175);
    rect(5, 5, 155, 70);
    fill(255, 255, 255);
    text(" EXIT ", 0, 60);
    pop();
  }

  // Game Over

  gameOver() {
    if (player.size <= 10) {
      // console.log("GAME OVER");
      noLoop();
      textFont("Permanent Marker");
      textSize(60);
      fill(0, 0, 0);
      textAlign(CENTER, CENTER);
      text("GAME OVER", WIDTH / 2, HEIGHT / 2);
    }
  }

  nextLevel() {
    if (player.pos.x < 155 && player.pos.y < 75) {
      console.log("next level_");
      this.passed = true;
      this.partNum += 1;
      this.vel += 0;

      // console.log("YEAY YOU DID IT");
      /*       noLoop();
      textFont("Permanent Marker");
      textSize(50);
      fill(216, 15, 15);
      textAlign(CENTER, CENTER);
      text("YOU MAKE IT ! NEXT LEVEL ", WIDTH / 2, HEIGHT / 2); */
      particles = [];
      player.pos = createVector(WIDTH, HEIGHT);
      createPart(this.partNum, this.vel);
    }
  }
}
