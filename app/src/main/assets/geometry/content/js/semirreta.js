var lines;
var parentDivID = "canvasSemirreta";
var lastPoint;
function LineDrawer(parentID) {
    this.parentDivID = parentID;
    this.drawLine = function () {
        const drawSpeed = 3;
        const ballSize = 10;
        const startX = 20;
       if (checkVisible(document.getElementById(this.parentDivID))) {
            background(255);
            fill(0);
            noStroke();
            ellipse(startX, height / 2, ballSize, ballSize);
           if (lastPoint < width - startX) {
               lastPoint += drawSpeed;
           }
           stroke(0);
           strokeWeight(5);
           line(startX, height / 2, lastPoint, height / 2);
        } else {
            setup();
        }
    }
}

function setup() {
    this.thisCanvas = createCanvas(windowWidth - 20, 100);
    this.thisCanvas.parent(this.parentDivID);
    this.lastPoint = 20;
    frameRate(30);
    lines = [];
    lines.push(new LineDrawer("canvasSemirreta"));

}

function draw() {
    for (var n = 0; n < lines.length; n++) {
        lines[n].drawLine();
    }
    /*
        const drawSpeed = 3;
        const ballSize = 10;
        const startX = 20;
        if (checkVisible(document.getElementById(this.parentDivID))) {
            background(255);
            fill(0);
            noStroke();
            ellipse(startX, height / 2, ballSize, ballSize);
            ellipse(width - startX, height / 2, ballSize, ballSize);
            if (this.lastPoint[0] > startX) {
                this.lastPoint[0] -= drawSpeed;
            }
            if (this.lastPoint[1] < width - startX) {
                this.lastPoint[1] += drawSpeed;
            }
            stroke(0);
            strokeWeight(5);
            line(width / 2, height / 2, lastPoint[0], height / 2);
            line(width / 2, height / 2, lastPoint[1], height / 2);
            textSize(20);
        } else {
            setup();
        }
    */
}

function mouseClicked() {
    setup();
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}