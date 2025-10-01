// Cookie Cliker game (interactive s)
// Daniel Yuzbashev
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let score; 
let cookieX;
let cookieY;
let cookieImg;

let lastCookieTime;
let cookiesPerSecond = 0; // store upgrade effect

// Store item variables
let grandmaCost = 50;
let grandmaCount = 0;

function preload() {
  cookieImg = loadImage("cookie_for_game.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  score = 0;
  cookieX = windowWidth/2 - 125;
  cookieY = windowHeight/2 - 125;
  lastCookieTime = millis();
}

function draw() {
  background(100);

  // Cookie
  image(cookieImg, cookieX, cookieY, 250, 250);

  // Timer for cookies per second
  if (millis() - lastCookieTime > 1000) {
    score += cookiesPerSecond;
    lastCookieTime = millis();
  }

  // Draw score
  textSize(50);
  fill(255);
  text(score, 50, 50);

  // Draw Store
  drawStore();
}

function drawStore() {
  // Store background
  fill(200);
  rect(width - 250, 0, 250, height);

  fill(0);
  textSize(20);
  text("STORE", width - 200, 40);

  text(`Grandma x${grandmaCount}`, width - 230, 100);
  text(`Cost: ${grandmaCost}`, width - 230, 130);
}

function mousePressed() {
  // Click cookie
  if (mouseX > cookieX &&
      mouseX < cookieX + 250 &&
      mouseY > cookieY &&
      mouseY < cookieY + 250) {
    score++;
  }

  // Click Grandma in store
  if (mouseX > width - 250 && mouseX < width && mouseY > 80 && mouseY < 150) {
    if (score >= grandmaCost) {
      score -= grandmaCost;
      grandmaCount++;
      cookiesPerSecond += 1;           
      // each grandma adds 1 CPS
      grandmaCost = floor(grandmaCost * 1.25); // price increases
    }
  }
}
