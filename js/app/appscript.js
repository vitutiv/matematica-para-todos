var nightMode = localStorage['nightToggle'] == 'true';
setNightMode(nightMode);

function toggleNightMode(){
    this.nightMode = !nightMode;
    setNightMode(this.nightMode);
}

function setNightMode(state) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].href != null && document.styleSheets[i].href.includes("night")) {
            console.log(document.styleSheets[i].id);
            document.styleSheets[i].disabled = !state;
            localStorage['nightToggle'] = JSON.stringify(state);
            return state;
        }
    }
}

function toggleLiteMode(){
    var batterySaver = localStorage['batterySaverToggle'] == 'true';
    setBatterySaver(!batterySaver);
}
function setLiteMode(state){
    localStorage['liteMode'] = JSON.stringify(state);
    return state;
}