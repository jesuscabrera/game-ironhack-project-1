function ParticleVirus() {
  // Start ParticleVirus in random place
  this.pos = createVector(random(width), random(height));

  this.update = function () {
    // Move ParticleVirus randomly
    var vel = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(vel);
  };

  this.display = function () {
    // Draw ParticleVirus as circle
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  };
}
