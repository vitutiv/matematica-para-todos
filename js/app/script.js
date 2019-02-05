var nightMode = localStorage['nightToggle'] == 'true';
nightMode = false;

findFavorite();
setNightMode(nightMode);
var buttonText = "Ocultar Resposta";
$('#fav-action').click(function(){favorite()});
$("#page-title").html(getTitle);
function toggleText(){
    var id = "#"+event.target.id;
    var $element = $(id);
    var text = $(id).html();
    $element.html(buttonText);
    this.buttonText = text;
}
function getTitle(){
    return document.title;
}
function toggleNightMode(){
    this.nightMode = !nightMode;
    setNightMode(this.nightMode);
}
function setNightMode(state) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].href != null && document.styleSheets[i].href.includes('night')) {
            //console.log(document.styleSheets[i].id);
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
function favorite(){
    var favorites = JSON.parse(localStorage['favorites']);
    //console.log(favorites);

    if (favorites == undefined) {
        favorites = [];
    }

    var favorite = {
        title: $('#page-title').html(),
        category: $('#page-subtitle').html,
        url: location.pathname
    }

    var removed = false;
    for (var i = 0; i < favorites.length; i++) {
        if(favorites[i].url == favorite.url){
            //console.log(favorites[i]);
            favorites.splice(i,1);
            $('#fav-icon').removeClass('fa');
            $('#fav-icon').addClass('far');
            removed = true;
        }
    }
    if (!removed){
        favorites.push(favorite);
        $('#fav-icon').removeClass('far');
        $('#fav-icon').addClass('fa');
    }

    localStorage['favorites'] = JSON.stringify(favorites);
}
function findFavorite(){
    var favorites = JSON.parse(localStorage['favorites']);
    var url = location.pathname;
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].url == url) {
            //console.log(favorites[i]);
            $('#fav-icon').removeClass('far');
            $('#fav-icon').addClass('fa');
            return true;
        }
    }
    return false;
}
function togglePicture(){
    var elementID = "#"+(event.target.id);
    var $element = $(elementID);
    var oldSRC = $(elementID).attr("src");
    $element.attr("src", $element.attr("data-toggle"));
    $element.attr("data-toggle", oldSRC);
    //console.log($element.attr("src"));
}