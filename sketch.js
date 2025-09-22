let x;
let y;


function setup() {
    createCanvas(400, 400);
    x = 0;
    y = [];
    let step = 1; // ボール間隔
    for (let i = 0; i <= height; i += step) {
        y.push(i);
    }
}

function draw() {
    background(0, 0, 0, 1);
    x = x + 1;
    if (x > width)(
        x = 0
    )
    // 毎フレームごとにランダムな色で塗りつぶす
    fill(random(255), random(255), random(255));
    for ( let i = 0; i < y.length; i++)(
        circle(x, y[i],random(10))
    )
    
    
}
