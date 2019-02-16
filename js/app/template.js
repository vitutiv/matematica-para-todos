$.get("../../general/content/template-head").done((data) => {
    $("head").append(data);
    var nightMode = localStorage['nightToggle'] == 'true';
    setNightMode(nightMode);
});

$.get("../../general/content/template-heading").done((data) => {
    $("main").prepend(data);
    $("#page-title").html(getTitle);
    $("#page-subtitle").html(category);
    $('#fav-action').click(function () {
        favorite();
    });
    findFavorite();
});

$("main").addClass("container");
$("body").addClass("content-page");
