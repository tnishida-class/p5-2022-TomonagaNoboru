// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, size)
  size = 100 + count * 2
 if(size > width){size = 300 - count * 2};

 if(keyIsDown("A".charCodeAt(0)))
 {{size = 100 + count % 20 * 10}
 if(size > width){size =  300 - count % 20 * 10}};
} 
 