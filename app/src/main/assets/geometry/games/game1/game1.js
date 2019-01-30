$(document).ready(function () {
    var questao;
    var tipoJogo;
    var botaoCorreto;
    var actionColor;
    var numQuestoes = 5;
    var rightGuesses = 0;
    var colors = [];
    var alternativas = [];
    var shapes = [];
    var questoes = [];
    var questoesUsadas = [];
    var modoJogo = [];
    var canvasPrincipal = $('#canvasPrincipal');
    var labelPergunta = $('#hPergunta');
    var mainPic = $("#mainPic");
    var fundo = $("#fundo");
    var canvasOpcao = $('.canvas-opcao');
    var botaoOpcao = $('.btn-opcao');
    var botaoAcao = $('.btn-acao');
    botaoAcao.get(0).onclick = function () {
        if (questoesUsadas.length >= numQuestoes - 1) {
            var score = (rightGuesses / numQuestoes) * 100;
            $("#btn-continuar").attr('data-target',"#modelId");
            $('#modelId').modal({ backdrop: 'static', keyboard: false });  
            $('#score-box').html('Você fez ' + score + '% de acertos');
            $("#btn-continuar").onclick = undefined;
        }else{
            newGame();
        }
    };
    botaoAcao.hide();
    modoJogo.push($('#jogoBotoes'));
    modoJogo.push($('#jogoCanvas'));
    pushShapes();
    pushColors();
    pushQuestions();
    newGame();
    function pushShapes() {
        shapes = [];
        var circulo = {
            resposta: 'círculo',
            numeroLados: 0,
        }

        var triangulo = {
            resposta: 'triângulo',
            numeroLados: 3,
        }

        var retangulo = {
            resposta: 'retângulo',
            numeroLados: 4,
        }

        var pentagono = {
            resposta: 'pentágono',
            numeroLados: 5,
        }

        var hexagono = {
            resposta: 'hexágono',
            numeroLados: 6,
        }

        var heptagono = {
            resposta: 'heptágono',
            numeroLados: 7,
        }

        var octogono = {
            resposta: 'octógono',
            numeroLados: 8,
        }

        var eneagono = {
            resposta: 'eneágono',
            numeroLados: 9,
        }

        var decagono = {
            resposta: 'decágono',
            numeroLados: 10,
        }
        shapes.push(circulo, triangulo, retangulo, pentagono, hexagono, heptagono, octogono, eneagono, decagono);
    }
    function pushQuestions() {
        questoes.push({
            enunciado: "O campo de futebol da imagem tem ...",
            cor: "#4caf50",
            imagem: "img/campoFutebol.svg",
            resposta: '7 retângulos, 8 semicírculos e 1 círculo',
            alternativas: [
                '7 retângulos, 8 semicírculos e 1 círculo',
                '4 retângulos e 4 círculos',
                '8 retângulos e 9 semicírculos',
                '7 retângulos e 8 círculos'
            ]
        });
        questoes.push({
            enunciado: "O tangram da imagem tem ...",
            cor: "#212121",
            imagem: "img/tangram.svg",
            resposta: '5 triângulos, 1 trapézio, 1 losango e 1 quadrado',
            alternativas: [
                '5 triângulos, 1 trapézio, 1 losango e 1 quadrado',
                '4 triângulos e 4 retângulos',
                '8 quadrados e 9 semicírculos',
                '7 trapézios e 8 quadrados'
            ]
        });
        questoes.push({
    enunciado: "Quantos retângulos tem este campo de futebol?",
    cor: "#4caf50",
    imagem: "img/campoFutebol.svg",
    resposta: '7',
    alternativas: [
        '7',
        '6',
        '5',
        '4'
    ]
        });
        questoes.push({
            enunciado: "Quantos círculos tem o campo de futebol?",
            cor: "#4caf50",
            imagem: "img/campoFutebol.svg",
            resposta: '1',
            alternativas: [
                '1',
                '4',
                '7',
                '9'
            ]
        });
        questoes.push({
            enunciado: "O campo de futebol da imagem tem ...",
            cor: "#4caf50",
            imagem: "img/campoFutebol.svg",
            resposta: '7 retângulos, 8 semicírculos e 1 círculo',
            alternativas: [
                '7 retângulos, 8 semicírculos e 1 círculo',
                '4 retângulos e 4 círculos',
                '8 retângulos e 9 semicírculos',
                '7 retângulos e 8 círculos'
            ]
        });
    }
    function pushColors() {
        colors = [];
        var color1 = {
            resposta: 'color1',
            hex: '#c0392b'
        }
        var color2 = {
            resposta: 'color2',
            hex: '#f1c40f'
        }

        var color3 = {
            resposta: 'color3',
            hex: '#2980c3'
        }

        var color4 = {
            resposta: 'color4',
            hex: '#27ae60'
        }

        var red = {
            resposta: 'Red',
            hex: '#d32f2f'
        }
        var pink = {
            resposta: 'Pink',
            hex: '#c2185b'
        }
        var purple = {
            resposta: 'Purple',
            hex: '#7b1fa2'
        }
        var deepPurple = {
            resposta: 'Deep Purple',
            hex: '#512da8'
        }
        var indigo = {
            resposta: 'Indigo',
            hex: '#303f9f'
        }
        var blue = {
            resposta: 'Blue',
            hex: '#1976d2'
        }
        var lightBlue = {
            resposta: 'Light Blue',
            hex: '#0288d1'
        }
        var cyan = {
            resposta: 'Cyan',
            hex: '#0097a7'
        }
        var teal = {
            resposta: 'Teal',
            hex: '#00796b'
        }
        var green = {
            resposta: 'Green',
            hex: '#388e3c'
        }
        var lightGreen = {
            resposta: 'Light Green',
            hex: '#689f38'
        }
        var lime = {
            resposta: 'Lime',
            hex: '#afb42b'
        }
        var yellow = {
            resposta: 'Yellow',
            hex: '#fbc02d'
        }
        var amber = {
            resposta: 'Amber',
            hex: '#ffa000'
        }
        var orange = {
            resposta: 'Orange',
            hex: '#f57c00'
        }
        var deepOrange = {
            resposta: 'Deep Orange',
            hex: '#e64a19'
        }
        var brown = {
            resposta: 'Brown',
            hex: '#5d4037'
        }
        var grey = {
            resposta: 'Grey',
            hex: '#616161'
        }
        var blueGrey = {
            resposta: 'Blue Grey',
            hex: '#455a64'
        }
        var nephritis = {
            resposta: 'Nephritis',
            hex: '#27ae60'
        }
        var pomegranate = {
            resposta: 'Pomegranate',
            hex: '#c0392b'
        }
        colors.push(red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, nephritis, pomegranate);
    }
    function newGame() {
        window.scrollTo(0,0);
        botaoAcao.hide();
        labelPergunta.css('color', 'initial');
        fundo.css('background', 'initial');
        canvasPrincipal.hide();
        mainPic.hide();
        modoJogo[0].hide();
        modoJogo[1].hide();
        if (questoesUsadas.length < numQuestoes) {
            tipoJogo = parseInt(Math.random() * 3);
            alternativas = [];
            do {
                if (tipoJogo == 0 || tipoJogo == 1){
                    questao = randomItem(shapes);
                    if (tipoJogo == 0){
                        drawShape(canvasPrincipal.get(0), questao.numeroLados);
                        canvasPrincipal.show();
                        labelPergunta.html('Qual é o nome dessa figura?');
                        modoJogo[0].show();
                    }else{
                        modoJogo[1].show();
                    }
                }else if (tipoJogo == 2){
                    shuffleArray(questoes);
                    questao  = questoes.pop();
                    labelPergunta.html(questao.enunciado);
                    mainPic.attr('src', questao.imagem);
                    mainPic.show();
                    fundo.css('background', questao.cor);
                    modoJogo[0].show();
                    labelPergunta.css('color', 'white');
                }
            } while (questoesUsadas.includes(questao));
            questoesUsadas.push(questao);
            if (tipoJogo == 0 || tipoJogo == 1){
                alternativas.push(questao);
            }else{
                alternativas.push(questao.resposta);
            }
            var alternativa;
            for (var n = 0; n < 3; n++) {
                do {
                    if (tipoJogo == 0 || tipoJogo == 1) {
                        alternativa = randomItem(shapes);
                    } else if (tipoJogo == 2) {
                        alternativa = randomItem(questao.alternativas);
                    }
                } while (alternativas.includes(alternativa));
                alternativas.push(alternativa);
            }
            shuffleArray(alternativas);
            botaoOpcao[0].style.background = '#c0392b';
            botaoOpcao[1].style.background = '#f1c40f';
            botaoOpcao[2].style.background = '#27ae60';
            botaoOpcao[3].style.background = '#2980b9';
            for (var n = 0; n < 4; n++) {
                if (tipoJogo == 0 || tipoJogo == 2){
                    if (tipoJogo == 0){
                        botaoOpcao[n].innerText = alternativas.pop().resposta.toUpperCase();
                    }else{
                        botaoOpcao[n].innerText = alternativas.pop().toUpperCase();
                    }
                    botaoOpcao[n].disabled = false;
                    //botaoOpcao[n].style.background = '#bdc3c7';
                    botaoOpcao[n].onclick = function () {
                        checkResult(event.target);
                    };
                }else{
                    alternativa = alternativas.pop();
                    drawShape(canvasOpcao[n], alternativa.numeroLados);
                    if (alternativa === questao){
                        botaoCorreto = canvasOpcao[n];
                    }
                    canvasOpcao[n].disabled = false;
                    canvasOpcao[n].style.background = 'initial';
                    if (canvasOpcao[n].innerText === questao.resposta) {
                        botaoCorreto = canvasOpcao[n];
                    }
                    canvasOpcao[n].onclick = function () {
                        checkResult(event.target);
                    };
                    canvasPrincipal.hide();
                    labelPergunta.html('Qual dessas figuras abaixo é um ' + questao.resposta + '?');
                }
            }
        }
    }
    function setBackground(element, color) {
        element.style.background = color;
    }
    function randomItem(itemArray) {
        return itemArray[parseInt(Math.random() * itemArray.length)];
    }
    function drawShape(canvas, nLados) {
        var context = canvas.getContext('2d');
        canvas.height = canvas.width;
        var width = canvas.width;
        var height = canvas.height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (window.innerWidth - 50 < canvas.width) {
            context.canvas.height = window.innerWidth - 50;
            context.canvas.width = window.innerWidth - 50;
        }
        context.lineWidth = 4;
        context.strokeStyle = 'black';
        size = canvas.width/2.5;
        x = width / 2,
        y = height / 2;
        shuffleArray(colors);
        actionColor = colors.pop().hex;
        context.fillStyle = actionColor;
        context.beginPath();
        context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
        switch (nLados) {
            case 0:
                context.arc(width / 2, width / 2, width / 2 - 20, 0, 2 * Math.PI, false);
                break;
            case 3:
                var startingX = parseInt(Math.random() * (width - 20)) + 10;
                context.moveTo(startingX, 20);
                context.lineTo(20, height - 20);
                context.lineTo(width - 20, height - 20);
                context.lineTo(startingX, 20);
                break;
            case 4:
                var randomWidth = parseInt(Math.random() * (height - 40)) + 10;
                var randomHeight = parseInt(Math.random() * (height - 40)) + 10;
                context.strokeRect((width / 2) - (randomWidth / 2), (height / 2) - (randomHeight / 2), randomWidth, randomHeight);
                context.fillRect((width / 2) - (randomWidth / 2), height / 2 - (randomHeight / 2), randomWidth, randomHeight);
                break;
            default:
                for (var side = 0; side < nLados + 1; side++) {
                    context.lineTo(x + size * Math.cos(side * 2 * Math.PI / nLados), y + size * Math.sin(side * 2 * Math.PI / nLados));
                }
        }
        context.stroke();
        context.fill();
    }
    function checkResult(button) {
        botaoAcao.show();
        for (var n = 0; n < botaoOpcao.length; n++) {
            setBackground(botaoOpcao[n], '#bdc3c7');
        }
        var isRightAnswer = false;
        if (button === botaoCorreto || button.innerText.toLowerCase() === questao.resposta.toLowerCase()) {
            isRightAnswer = true;
        }

        if (isRightAnswer) {
            rightGuesses++;
        } else {
            setBackground(button, '#ef5350');
        }

        botaoAcao.css('background', '#424242');
        botaoAcao.show();
        for (var n = 0; n < 4; n++){
            botaoOpcao[n].disabled = true;
            var textoBotao = botaoOpcao[n].innerText.toLowerCase();
            if (textoBotao === questao.resposta) {
                setBackground(botaoOpcao[n], '#66bb6a');
            }
            canvasOpcao[n].onclick = null;
            if (canvasOpcao[n] === botaoCorreto) {
                setBackground(canvasOpcao[n], '#66bb6a');
            }
        }
    }
    /*function getScore() {
        fundo.css('background-color', '#ffb300');
        var score = (rightGuesses / numQuestoes) * 100;
        var sourceImage = "../../../img/";
        if (score >=  0 && score < 60){
            sourceImage += 'emoji_u1f641.svg';
        }else if (score <= 70){
            sourceImage += 'emoji_u263a.svg';
        }else if (score <= 80){
            sourceImage += 'emoji_u1f603.svg';
        }else{
            sourceImage += 'emoji_u1f604.svg';
        }
        labelPergunta.html('<b>FIM DE JOGO!</b> <br/> Sua pontuação final foi de ' + score + ' %');
        for (var n = 0; n < modoJogo.length; n++) {
            modoJogo[n].hide();
        }
        canvasPrincipal.hide();
        botaoAcao.html('SAIR');
        botaoAcao.show();
        mainPic.attr('src', sourceImage);
        mainPic.show();
        botaoAcao.get(0).onclick = function () {
            window.history.back();
        };
    }
    */
  });

function exitGame() {
    window.history.back();
    location.href = "../../index.html";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}