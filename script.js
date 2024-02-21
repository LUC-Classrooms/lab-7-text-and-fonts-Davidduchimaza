/**
 * Lab 7 - Text
 */

let phrase1 = " An apple a day....";
let phrase2 = " keeps the doctor away! ";

function setup() {
  createCanvas(640, 240);
  textFont("Comforta");
}

function draw() {
  background(200);
  textSize(24);
  if (mouseIsPressed) {
    textSize(32);
    text(phrase2, 20, 160);
  } else {
    textSize(24);
    text(phrase1, 20, 60);
  }
}
