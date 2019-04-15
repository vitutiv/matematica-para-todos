var theseCanvas;
function SegmentoReta(lastPoint) {
    this.drawLine = function(){
        const drawSpeed = 3;
        const ballSize = 10;
        const startX = 20;
        var lines;0
    }
}

function setup() {
    this.canvas = [];
    for(var i = 0; i < 3; i++){
        this.canvas.push(createCanvas(windowWidth - 20, 100));
    }
    this.canvas[0].parent("canvasReta");
    this.canvas[1].parent("canvasSemirreta");
    this.canvas[2].parent("canvasSegmentoReta");

    this.canvas[0].draw = function(){ // Reta
        background(0);
    }
    
    this.canvas[1].draw = function () { //Semirreta
        background(0);
    }
    
    this.canvas[2].draw = function () { //Segmento de Reta
        background(0);
    }

    lines = [];
    this.lastPoint = [];
    this.lastPoint.push(width / 2);
    this.lastPoint.push(width / 2);
    lines.push(new SegmentoReta(lastPoint));
    frameRate(30); 
}


function draw() {
    for (var i = 0; i < 3; i++) {
        this.canvas[i].background(0);
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}