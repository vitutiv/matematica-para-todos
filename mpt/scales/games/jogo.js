var txt = [];
txt.push(document.getElementById("mm"));
txt.push(document.getElementById("cm"));
txt.push(document.getElementById("dm"));
txt.push(document.getElementById("m"));
txt.push(document.getElementById("Dm"));
txt.push(document.getElementById("Hm"));
txt.push(document.getElementById("Km"));
var pos;
var valor;
var valorCelula;
novoJogo();
function novoJogo(){
    var r = parseInt(Math.random() * txt.length);
    for (var t = 0; t < 2; t++){
        for (var n = 0; n < txt.length; n ++){
            txt[n].innerText = "";
            if (n == r){
                txt[n] = 1;
                pos = n;
                valor = txt[n].innerText;
            }else if (t == 1){
                txt[n].innerText = (valor);
            }
        }    
    }
}