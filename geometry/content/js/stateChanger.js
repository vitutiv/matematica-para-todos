var estado = false;

function Forma(nomeForma,nomePasta){
    this.nomePasta = nomePasta;
    this.nomeForma = nomeForma;
    this.trocarImagem = function () {
        if (estado) {
            event.target.src = 'img/' + this.nomePasta + '/' + this.nomeForma + '.svg';
        } else {
            event.target.src = 'img/' + this.nomePasta + '/' + this.nomeForma + '1.svg';
        }
        this.estado = !this.estado;
    }    
}

function Forma(nomeForma){
    this.StateChanger(nomeForma,nomeForma);
}