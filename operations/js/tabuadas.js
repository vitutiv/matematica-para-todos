
var $tableAdicao = $(".tabuada-adicao");
for (var i = 0; i <= 10; i++){
    var $numberTable = $("<table/>").addClass("table table-striped");
    var $numberBody = $("<tbody/>");
    var $numberTitle = $("<h4/>").append("Número " + i);
    for (var j = 0; j <= 10; j++){
        var $tableRow = $("<tr/>");
        var $valor1 = $("<td/>").append(i);
        var $operacao = $("<td/>").append("+");
        var $valor2 = $("<td/>").append(j);
        var $igual = $("<td/>").append("=");
        var $resultado = $("<td/>").append(i+j);
        $tableRow.append($valor1,$operacao,$valor2,$igual,$resultado);
        $numberBody.append($tableRow);
    }
    $numberTable.append($numberBody);
    $tableAdicao.append($numberTitle);
    $tableAdicao.append($numberTable);
}