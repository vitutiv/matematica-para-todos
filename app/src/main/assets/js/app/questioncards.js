var isShown = false;
var isRight=false;
function toggle() {
    isShown = !isShown;
    if (isShown) {
        event.target.innerText = 'Esconder Resposta';
    } else {
        event.target.innerText = 'Mostrar Resposta';
    }
}

function paintRight() {
    event.target.style.border = '2px solid #66bb6a';
    isRight = true;
}
function paintWrong() {
    if (!isRight){
        event.target.style.border = '2px solid #ef5350';
    }
}