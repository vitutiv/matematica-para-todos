var isShown = false;
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
}
function paintWrong() {
    event.target.style.border = '2px solid #ef5350';
}
