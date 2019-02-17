$.get("../../general/content/template-heading").done((data) => {
    $("main").prepend(data);
    $("#page-title").html(getTitle);
    $("#page-subtitle").html(category);
    $('#fav-action').click(function () {
        favorite();
    });
    findFavorite();
    window.scrollTo(0,0);
});

$("main").addClass("container");
$("body").addClass("content-page");