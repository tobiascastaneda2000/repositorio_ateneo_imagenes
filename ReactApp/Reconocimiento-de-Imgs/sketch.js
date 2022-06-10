let img1;
let img2;
let c;
let imgNumber;

function preload() {
  // preload() runs once
  img1 = loadImage("imgs/sol1.jpg");
  img2 = loadImage("imgs/sol2.jpg");
}

function setup() {
  createCanvas(1000, 1000);

  // setup() waits until preload() is done
  img1.loadPixels();
  img2.loadPixels();
  c = 0;
  imgNumber = img2;
  // get color of middle pixel
}

function draw() {
  background(c);
  fill(255, 51, 51);
  square(20, 20, 30);
  noFill();
  textSize(20);
  fill(51, 0, 51);
  textAlign(LEFT);
  text("1", 30, 42);
  noFill();

  fill(255, 51, 51);
  square(60, 20, 30);
  noFill();
  textSize(20);
  fill(51, 0, 51);
  textAlign(LEFT);
  text("2", 67, 42);
  noFill();
  image(imgNumber, 40, 70, imgNumber.width, imgNumber.height);
}

function mouseClicked() {
  img1 = loadImage("imgs/sol1.jpg");
  img2 = loadImage("imgs/sol2.jpg");

  image(img1, 50, 50, 400, 400);
  if (mouseX > 20 && mouseX < 50 && mouseY > 20 && mouseY < 50) {
    imgNumber = img1;
    c = color(50, 0, 50);
  }
  if (mouseX > 60 && mouseX < 90 && mouseY > 20 && mouseY < 50) {
    imgNumber = img2;
    c = color(20, 0, 51);
  }
}
