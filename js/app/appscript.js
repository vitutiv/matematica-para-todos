var nightMode = localStorage['nightToggle'] == 'true';

var sheetIndex;
for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i] != null && document.styleSheets[i].href.includes("styles_night.css")) {
        sheetIndex = i;
        break;
    }
}
document.styleSheets[sheetIndex].disabled = !nightMode;

function toggleNightMode(){
    this.nightMode = !nightMode;
    setNightMode(this.nightMode);
}

function setNightMode(state) {
    var index;
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i] != null && document.styleSheets[i].href.includes("styles_night.css")) {
            index = i;
            break;
        }
    }
    this.nightMode = state;
    document.styleSheets[index].disabled = !this.nightMode;
    localStorage['nightToggle'] = JSON.stringify(this.nightMode);
    return this.nightMode;
}

function toggleLiteMode(){
    var batterySaver = localStorage['liteMode'] == 'true';
    setBatterySaver(!batterySaver);
}
function setLiteMode(state){
    localStorage['liteMode'] = JSON.stringify(state);
    return state;
}