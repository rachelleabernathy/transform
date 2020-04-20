let square = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i< 50; i++) {
    square.push(new Jitter());
  }
}

function draw() {
  background('magenta');
  for (let i = 0; i < square.length; i++) {
    square[i].move();
    square[i].display();
  }
}

class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    rect(20, 20, this.x, this.y);
  }
}