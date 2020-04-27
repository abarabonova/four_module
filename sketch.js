function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill('#002376');
  noStroke();
  let moveSun = map(mouseX, 0, width, width, 0);
  let moveSun1 = map(mouseX, 0, 300, width, 0);
  let moveSun2 = map(mouseY, 0, height, 0, width);
  let moveSun3 = map(mouseY, 0, height, 0, 200);
  let moveSun4 = map(mouseX, 0, width, 400, 900);
  let moveSun5 = map(mouseX, 0, 600, 800, -100);
  let moveSun6 = map(mouseX, 0, 400, 200, 1200);
  let moveSun7 = map(mouseY, 0, 350, 1000, 0);
  let moveSun8 = map(mouseX, 400, width, 0, 600);

  let moveSunWhite = map(mouseX, 0, width, width, 0);
  let moveSun1White = map(-mouseX, 0, 300, width, 200);
  let moveSun2White = map(mouseY, 10, width, 0, width);
  let moveSun3White = map(-mouseY, 0, height, 0, 200);
  let moveSun4White = map(mouseX, 200, width, 400, 900);
  let moveSun5White = map(-mouseX, 0, 600, 800, -100);
  let moveSun6White = map(-mouseX, 100, 400, 200, 1200);
  let moveSun7White = map(mouseY, 0, 350, 1000, 600);
  let moveSun8White = map(-mouseX, 400, width, 0, 400);
  background('#F7C9C9');
  ellipse(moveSun, 0, 190);

  ellipse(moveSun, 800, 190);

  ellipse(moveSun3 + 100, 800, 190);
  ellipse(moveSun3 - 10, 200, 190);
  ellipse(moveSun2 - 40, 400, 190);
  ellipse(moveSun2 - 100, 600, 190);
  ellipse(moveSun4, 0, 190);

  ellipse(moveSun4, 200, 190);
  ellipse(moveSun4, 1000, 400);
  // text('send   help', width / 2, height / 2);

  fill('#F55D58');
  ellipse(moveSun5White, 200, 190);
  ellipse(moveSun5White - 30, 1000, 400);

  ellipse(moveSun5White - 200, width, 590);
  ellipse(moveSun5White + 100, 800, 90);

  ellipse(moveSun5White + 300, 100, 290);
  ellipse(moveSun5White + 50, 700, 190);

  fill('#002376');
  ellipse(moveSun4, width, 590);
  ellipse(moveSun4 + 100, 800, 90);

  ellipse(moveSun1, 100, 290);
  ellipse(moveSun3, 700, 190);

  ellipse(moveSun5, 200, 190);

  //
  fill('#F55D58');
  ellipse(moveSun6White - 200, width, 590);
  ellipse(moveSun6White + 100, 800, 90);

  ellipse(moveSun6White + 300, 100, 290);
  ellipse(moveSun6White + 50, 700, 190);

  ellipse(moveSun7White, 100, 290);
  ellipse(moveSun7White, 700, 190);

  ellipse(moveSun7White, 200, 190);
  ellipse(moveSun7White - 30, 1000, 400);

  ellipse(moveSun7White - 200, width, 90);
  ellipse(moveSun7White + 100, 800, 90);

  ellipse(moveSun7White + 300, 100, 290);
  ellipse(moveSun7White + 50, 700, 190);
  //
  fill('#002376');
  ellipse(moveSun5 - 30, 1000, 400);

  ellipse(moveSun5 - 200, width, 590);
  ellipse(moveSun5 + 100, 800, 90);

  ellipse(moveSun5 + 300, 100, 290);
  ellipse(moveSun5 + 50, 700, 190);

  ellipse(moveSun5, width, 590);
  ellipse(moveSun5 + 100, 800, 90);
  ellipse(moveSun5, 100, 290);
  ellipse(moveSun5, 700, 190);
//
  fill('#F55D58');
  ellipse(moveSun6White + 300, 300, 290);
  ellipse(moveSun6White + 50, 500, 190);

  ellipse(moveSun8White, 600, 290);
  ellipse(moveSun8White, 250, 190);

  ellipse(moveSun8White, 200, 190);
  ellipse(moveSun8White - 30, 1400, 400);

  ellipse(moveSun8White - 200, width, 90);
  ellipse(moveSun8White + 100, 1800, 290);

  ellipse(moveSun8White + 300, 500, 290);
  ellipse(moveSun8White + 50, 200, 190);
  ellipse(moveSun4White, width, 590);
  ellipse(moveSun4White + 100, 800, 90);

  ellipse(moveSun1White, 100, 290);
  ellipse(moveSun3White, 700, 190);

  ellipse(moveSun5White, width, 590);
  ellipse(moveSun5White + 100, 800, 90);
  ellipse(moveSun5White, 100, 290);
  ellipse(moveSun5White, 700, 190);

  ellipse(moveSun6White, width, 590);
  ellipse(moveSun6White + 100, 800, 90);
  ellipse(moveSun6White, 100, 290);
  ellipse(moveSun6White, 700, 190);

  ellipse(moveSun6White, 200, 190);
  ellipse(moveSun6White - 30, 1000, 400);
  //
  fill('#002376');
  ellipse(moveSun6, width, 590);
  ellipse(moveSun6 + 100, 800, 90);
  ellipse(moveSun6, 100, 290);
  ellipse(moveSun6, 700, 190);

  ellipse(moveSun6, 200, 190);
  ellipse(moveSun6 - 30, 1000, 400);

  ellipse(moveSun6 - 200, width, 590);
  ellipse(moveSun6 + 100, 800, 90);

  ellipse(moveSun6 + 300, 100, 290);
  ellipse(moveSun6 + 50, 700, 190);

  ellipse(moveSun7, 100, 290);
  ellipse(moveSun7, 700, 190);

  ellipse(moveSun7, 200, 190);
  ellipse(moveSun7 - 30, 1000, 400);

  //
  fill('#F55D58');
  ellipse(moveSun6White - 200, width, 590);
  ellipse(moveSun6White + 100, 800, 90);

  ellipse(moveSun6White + 300, 100, 290);
  ellipse(moveSun6White + 50, 700, 190);

  ellipse(moveSun7White, 100, 290);
  ellipse(moveSun7White, 700, 190);

  ellipse(moveSun7White, 200, 190);
  ellipse(moveSun7White - 30, 1000, 400);

  ellipse(moveSun7White - 200, width, 90);
  ellipse(moveSun7White + 100, 800, 90);
  //
  fill('#002376');
  ellipse(moveSun7 - 200, width, 90);
  ellipse(moveSun7 + 100, 800, 90);

  ellipse(moveSun7 + 300, 100, 290);
  ellipse(moveSun7 + 50, 700, 190);
  ellipse(moveSun6 + 300, 300, 290);
  ellipse(moveSun6 + 50, 500, 190);

  ellipse(moveSun8, 600, 290);
  ellipse(moveSun8, 250, 190);

  ellipse(moveSun8, 200, 190);
  ellipse(moveSun8 - 30, 1400, 400);

  ellipse(moveSun8 - 200, width, 90);
  ellipse(moveSun8 + 100, 1800, 290);

  ellipse(moveSun8 + 300, 500, 290);
  ellipse(moveSun8 + 50, 200, 190);

  fill('#F55D58');



  ellipse(moveSunWhite, 0, 190);

  ellipse(moveSunWhite, 800, 190);

  ellipse(moveSun3White + 100, 800, 190);
  ellipse(moveSun3White - 10, 200, 190);
  ellipse(moveSun2White - 40, 400, 190);
  ellipse(moveSun2White - 100, 600, 190);
  ellipse(moveSun4White, 0, 190);

  ellipse(moveSun4White, 200, 190);
  ellipse(moveSun4White, 1000, 400);
  // text('send   help', width / 2, height / 2);




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
