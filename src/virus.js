class ParticleVirus {
  constructor(vel) {
    // Position
    this.pos = createVector(random(width - 200), random(height - 200));
    // Velocity
    this.vel = createVector(random(-vel, vel), random(-vel, vel));
    // Size
    this.size = 30;
    // Opacity
    this.opacity = 70;
  }
  // update movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  // draw single particle
  draw() {
    noStroke();
    fill(255, 0, 0, this.opacity);
    circle(this.pos.x, this.pos.y, this.size);
  }
  // Detect edges

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect particles
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 120) {
        this.size += 0.05;
        this.opacity += 0.01;
        strokeWeight(2);
        stroke(0, 0, 0, 10);

        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
  // Take life from player by contact

  checkDamage(particles) {
    particles.forEach((particle) => {
      const damage = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y);

      if (damage < player.size / 2 + this.size / 2) {
        // console.log("damage is " + damage);
        // console.log("particle is " + this.size);
        // console.log("player is " + player.size);
        player.size -= 25;
        strokeWeight(1);
        stroke(255, 0, 0, 50);
        line(this.pos.x, this.pos.y, player.pos.x, player.pos.y);
      }
    });
  }
}
