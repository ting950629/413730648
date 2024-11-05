let angle = 0;
let r = 255, g = 0, b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fa2d2f");
}

function draw() {
  background(220);
  rectMode(CENTER);
  noFill();
  stroke("#ffafcc");
  strokeWeight(2);

  let rect_width = 50 + mouseX / 10;
  let bc_width = 50 + mouseX / 10;
  let sc_width = 25 + mouseX / 10;

  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 40; i++) {

      if (j < 5) {
        stroke("#cdb4db");
      } else if (j < 10) {
        stroke("#ffc8dd");
      } else {
        stroke("#669bbc");
      }
      
      ellipse(25 + 50 * i, 25 + 50 * j, bc_width);
      rect(25 + 50 * i, 25 + 50 * j, rect_width);
      ellipse(50 + 50 * i, 50 + 50 * j, sc_width);
    }
  }

  // 更新 RGB 顏色值
  r = (r + 1) % 256;
  g = (g + 2) % 256;
  b = (b + 3) % 256;

  // 設定文字顏色為中空且外框變色
  noFill();
  stroke(r, g, b);
  strokeWeight(20);

  textSize(500);
  textAlign(CENTER, CENTER);
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  text('ting', 0, 0);
  pop();

  // 增加旋轉角度
  angle += 0.02;
}
