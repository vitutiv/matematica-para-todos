function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
    background(100);
    noStroke();
    fill(50);
    push();
    sphere(300);
    pop();
}