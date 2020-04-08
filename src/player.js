class drawPlayer {
  constructor() {
    // Initialize player position

    // Position
    this.pos = createVector(WIDTH, HEIGHT);
    // Velocity
    this.vel = 10;
    // Size
    this.size = 70;
    // innerSize
    this.innerSize = 10;
    // Opacity
    this.opacity = 70;
    // innerOpacity
    this.innerOpacity = 150;
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.pos.x += this.vel;
      } else if (keyCode == LEFT_ARROW) {
        this.pos.x -= this.vel;
      } else if (keyCode == UP_ARROW) {
        this.pos.y -= this.vel;
      } else if (keyCode == DOWN_ARROW) {
        this.pos.y += this.vel;
      }
    }

    this.edges();
  }

  // draw single particle
  draw() {
    noStroke();
    fill(0, 255, 0, this.opacity);
    circle(this.pos.x, this.pos.y, this.size);
    fill(0, 0, 0, this.innerOpacity);
    circle(this.pos.x, this.pos.y, this.innerSize);
  }

  // Detect edges

  edges() {
    if (this.pos.x > width - this.size / 2) {
      this.pos.x = +this.pos.x - this.vel;
    }
    if (this.pos.x < 0 + this.size / 2) {
      this.pos.x = +this.pos.x + this.vel;
    }
    if (this.pos.y > height - this.size / 2) {
      this.pos.y = +this.pos.y - this.vel;
    }
    if (this.pos.y < 0 + this.size / 2) {
      this.pos.y = +this.pos.y + this.vel;
    }
  }
}
