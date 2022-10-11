// 小手調べ
function setup(){
  createCanvas(100,100)
  noFill();
  for(let i = 0; i < 10; i++){
    // BLANK[1]
  if(i < 5){
    stroke(0,0,255);
    ellipse(50,50,i * 10 + 10);
  }
  else{
    stroke(255,0,0);
    ellipse(50,50,i * 10 + 10);
    }
  }
}
