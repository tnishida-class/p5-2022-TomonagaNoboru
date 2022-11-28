// 最終課題を制作しよう
let x1, x2, x3, x4
let y1, y2, y3, y4
let dista, distb, distc, distd
let Hit
let a, b, c, d, e
const limit = 30
let startTime
let state
let difficulty // easy = 0.8, normal = 1.0, hard = 1.2, muri = 1.5

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(160, 192, 255);
  
  textAlign(CENTER, CENTER);
  state = 0;

  x1 = random(windowWidth / 2 - 85, windowWidth / 2 + 85)
  x2 = windowWidth / 8
  x3 = windowWidth * 7 / 8
  x4 = random(windowWidth / 2 - 85, windowWidth / 2 + 85)

  y1 = windowHeight / 8
  y2 = random(windowHeight / 2 - 70, windowHeight / 2 + 70)
  y3 = random(windowHeight / 2 - 95, windowHeight / 2 + 95)
  y4 = windowHeight * 7 / 8

  a = 0
  b = 0
  c = 0
  d = 0
  e = 0
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




function CheckHit(s, t, u, v){
Hit = 0
if(s <= 625 * 0.8 || t <= 1600 * 0.8 || u <= 225 * 0.8 || v <= 625 * 0.8){Hit = 1}
}

function mouseClicked() {
  if (state == 0 && ((mouseX - (width / 2 - 60))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20) {
    startTime = millis();
    state = 1;
    difficulty = 0.8}
  if (state == 0 && ((mouseX - (width / 2 - 20))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20) {
    startTime = millis();
    state = 1;
    difficulty = 1}
  if (state == 0 && ((mouseX - (width / 2 + 20))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20) {
    startTime = millis();
    state = 1;
    difficulty = 1.2}
  if (state == 0 && ((mouseX - (width / 2 + 60))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20) {
    startTime = millis();
    state = 1;
    difficulty = 1.5}
  if (state >= 2){window.location.reload();}  
  }


   function draw(){
  
  if (state == 0){
    textSize(40)
    fill(216,194,0)
    text("Cursor Dodge", width / 2 + 2, height / 5 + 2);
    fill(255,234,10)
    text("Cursor Dodge", width / 2 , height / 5 );
    textSize(30)
    fill(0)
    text("Rules" , width / 2, height / 3)
    text("Select and Click", width / 2 , height / 3 + 120)
    textSize(20)
    text("マウスで緑色の円を動かして四方から来る球を避けよう！", width / 2, height / 3 + 30)
    text("球に当たるか白いエリアの外に出てしまうとGame Over", width / 2, height / 3 + 50)
    text("30秒間避け続けられたらClear!", width / 2, height / 3 + 70)
    textSize(13)
    text("easy", width / 2 - 60, height / 2 + 50)
    text("normal", width / 2 - 20, height / 2 + 50)
    text("hard", width / 2 + 20, height / 2 + 50)
    text("muri", width / 2 + 60, height / 2 + 50)
    fill(0,153,192)
    if(((mouseX - (width / 2 - 60))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20){fill(0,224,240)}
    ellipse(width / 2 - 60, height / 2 + 30, 20)
    fill(143,186,0)
    if(((mouseX - (width / 2 - 20))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20){fill(185,240,5)}
    ellipse(width / 2 - 20, height / 2 + 30, 20)
    fill(196,98,0)
    if(((mouseX - (width / 2 + 20))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20){fill(255,130,6)}
    ellipse(width / 2 + 20, height / 2 + 30, 20)
    fill(160,0,0)
    if(((mouseX - (width / 2 + 60))** 2 + (mouseY - (height / 2 + 30)) ** 2 ) <= 20){fill(240,0,0)}
    ellipse(width / 2 + 60, height / 2 + 30, 20)

  }  


  if (state == 1){
      let ellapsedTime = (millis() - startTime) / 1000;
      if (ellapsedTime > limit) {
        state = 3}
   

    if(Hit == 1 || mouseX < width / 2 - 110 || mouseX > width / 2 + 110 || mouseY < height / 2 - 110 || mouseY > height / 2 + 110){state = 2}
    

    dista = (mouseX - x1) ** 2 + (mouseY - y1) ** 2 
    distb = (mouseX - x2) ** 2 + (mouseY - y2) ** 2 
    distc = (mouseX - x3) ** 2 + (mouseY - y3) ** 2 
    distd = (mouseX - x4) ** 2 + (mouseY - y4) ** 2 
    
    CheckHit(dista, distb, distc, distd)
    background(160, 192, 255);
    fill(255)
    rect(width / 2 - 100, height / 2 - 100, 200)
    
    textSize(25)
    let remainingTime = limit - ellapsedTime + 1;
    fill(0)
    text("残り時間", width / 16, height / 16 + 2.5)
    textSize(30)
    if(remainingTime <= 11){fill(255,0,0)}
    if(remainingTime < 1){fill(0,255,0)}
    text(floor(remainingTime), width / 8, height / 16 );
      fill(0)
      ellipse(x1, y1, 30)
     y1 += ( 4 * (1 + a / 10) ) * difficulty
      if(y1 >= windowHeight + 75)
      {x1 = random(windowWidth / 2 - 85, windowWidth / 2 + 85),
      y1 = windowHeight / 8,
      a++}
      
      ellipse(x2, y2, 60)
      x2 += ( 2 * (1 + b / 2) ) * difficulty
      if(x2 >= windowWidth + 150)
      {x2 = windowWidth / 8,
      y2 =  random(windowHeight / 2 - 70, windowHeight / 2 + 70),
      b++}


      ellipse(x3, y3, 10)
      x3 -= ( 6 * (1 + c / 15) ) * difficulty
      if(x3 <= -25)
      {x3 = windowWidth * 7 / 8,
      y3 =  random(windowHeight / 2 - 95, windowHeight / 2 + 95),
      c++}

      
      ellipse(x4, y4, 30)
      y4 -= ( 4 * (1 + d / 8) ) * difficulty
      if(y4 <= -150)
      {x4 = random(windowWidth / 2 - 85, windowWidth / 2 + 85),
      y4 = windowHeight * 7 / 8,
      d++}
      
      if(Hit == 0){
        fill(0,255,0)
        ellipse(mouseX, mouseY, 20)
      } 
      if(Hit == 1){
        fill(255,0,0)
        ellipse(mouseX, mouseY, 20)
      }

      mouseX = constrain(mouseX, width / 2 - 90, width / 2 + 90)
      mouseY = constrain(mouseY, height / 2 - 90, height / 2 + 90)
  }

    if (state >= 2){
      textSize(20)
      fill(0)
      text("クリックすると最初の画面に戻ります", width / 2, height / 6 + 50)
    }

    if (state == 2) {
      textSize(35)
      fill(255,0,0)
      text("Game Over", width / 2, height / 6)
      
  }

  if (state == 3){
    textSize(35)
    fill(0,255,0)
    if(difficulty == 0.8){text("Easy Clear!", width / 2, height / 6)}
    if(difficulty == 1){text("Normal Clear!", width / 2, height / 6)}
    if(difficulty == 1.2){text("Hard Clear!", width / 2, height / 6)}
    if(difficulty == 1.5){text("Muri Clear!!", width / 2, height / 6)}
  }
  
}