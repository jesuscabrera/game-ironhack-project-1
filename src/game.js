class drawGame {
  constructor() {
    this.exit = rect(100, 5, 155, 70);
  }

  draw() {
    textFont("Roboto");
    textSize(60);
    fill(175, 245, 175);
    rect(5, 5, 155, 70);
    fill(255, 255, 255);
    text(" EXIT ", 0, 60);
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

  nextCountry() {
    if (player.pos.x < 155 && player.pos.y < 75) {
      // console.log("YEAY YOU DID IT");
      noLoop();
      textFont("Permanent Marker");
      textSize(50);
      fill(216, 15, 15);
      textAlign(CENTER, CENTER);
      text("YOU MAKE IT ! NEXT LEVEL ", WIDTH / 2, HEIGHT / 2);
    }
  }
}
