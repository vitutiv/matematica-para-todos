var nome = [];
nome.push(["unidade","unidades"]);
nome.push(["dezena","dezenas"]);
nome.push(["centena","centenas"]);
nome.push(["unidade de milhar","unidades de milhar"]);
nome.push(["dezena de milhar", "dezenas de milhar"]);
nome.push(["centena de milhar", "centenas de milhar"]);
nome.push(["unidade de milhão", "unidades de milhão"]);
nome.push(["dezena de milhão", "dezenas de milhão"]);
nome.push(["centena de milhão", "centenas de milhão"]);

function generateRandomNumber(maxSlots){
    var numberArray = [];
    for (var i = 0; i < maxSlots; i++){
        numberArray.push(parseInt(Math.random() * 10));
    }
    var number = ""
    var numberString = "";
    for (var i = 0; i < numberArray.length; i++){
        number += numberArray[numberArray.length - i];
        numberString += numberArray[numberArray.length - 1 - i] + nome[numberArray.length - 1- i];
    }
    console.log(number);
    console.log(numberString);
}