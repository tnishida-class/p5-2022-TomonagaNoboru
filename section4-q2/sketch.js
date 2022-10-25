// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }
  let strad = -PI / 2;
  let edrad = 0;
  let rx, ry , nx, ny;
  for(let i = 0; i < scores.length; i++){
    edrad = strad + 2 * PI * scores[i] / total
    stroke(120);
    strokeWeight(1);
    arc(width / 2, height / 2 , width / 2 , height / 2, strad, edrad)
    rx = width / 2 + width / 4 * Math.cos(edrad)
    ry = height / 2 + height / 4 * Math.sin(edrad)
    line(width / 2, height / 2, rx, ry)
    //nx = width / 2 + width / 8 * Math.cos(edrad)
    //ny = height / 2 + height / 8 * Math.sin(edrad)
    //text(scores[i].toPrecision(3),nx ,ny);
    strad = edrad;
  }
  for(let i = 0; i < scores.length; i++){
    edrad = strad + 2 * PI * scores[i] / total
    stroke(120);
    strokeWeight(1);
    rx = width / 2 + width / 4 * Math.cos(edrad)
    ry = height / 2 + height / 4 * Math.sin(edrad)
    line(width / 2, height / 2, rx, ry)
    nx = width / 2 + width * 5 / 16 * Math.cos((strad + edrad) / 2 )
    ny = height / 2 + height * 5 / 16 * Math.sin((strad + edrad) / 2)
    per = (scores[i] / total) * 100
    text(scores[i].toPrecision(3),nx - 10 ,ny + 10)
    text(per.toPrecision(3),nx - 10 ,ny + 22);
    text("      %",nx - 8 ,ny + 22)
    strad = edrad;
  }

  console.log(strad, edrad)
  // BLANK[1]

}
