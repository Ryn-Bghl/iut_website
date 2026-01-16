let shapes = [];
const NUM_SHAPES = 50;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");

  for (let i = 0; i < NUM_SHAPES; i++) {
    shapes.push(new TechShape());
  }
}

function draw() {
  clear();

  for (let shape of shapes) {
    shape.update();
    shape.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class TechShape {
  constructor() {
    this.reset();

    this.y = random(height);
  }

  reset() {
    this.x = random(width);
    this.y = random(height + 100, height + 500);
    this.size = random(10, 40);
    this.angle = random(TWO_PI);
    this.rotationSpeed = random(-0.05, 0.05);
    this.speedY = random(0.5, 2);

    let r = random();
    if (r < 0.33) {
      this.color = color(0, 255, 0, 50);
    } else if (r < 0.66) {
      this.color = color(147, 112, 219, 50);
    } else {
      this.color = color(255, 255, 255, 30);
    }
  }

  update() {
    this.y -= this.speedY;
    this.angle += this.rotationSpeed;

    if (this.y < -50) {
      this.reset();
      this.y = height + 50;
    }
  }

  display() {
    push();

    translate(this.x, this.y);

    rotate(this.angle);

    noFill();
    stroke(this.color);
    strokeWeight(1.5);
    rectMode(CENTER);

    rect(0, 0, this.size, this.size);

    line(-this.size / 2, 0, this.size / 2, 0);

    pop();
  }
}
