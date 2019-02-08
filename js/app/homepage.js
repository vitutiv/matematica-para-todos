
function loadSearchable() {
    $("li a").each(function (index, element) {
        contents.push({
            theme: $(element).parents(".content-wrapper").find(".title").text(),
            href: $(element).attr('href'),
            name: $(element).text(),
            color: $(element).parents('.content').find('.content-background').css("background-color")
        })
    })
}

function search() {
    $(".search-results").empty();
    var term = $(".main-search").val();
    var regex = new RegExp(term, 'i');
    contents.forEach(function (content) {
        if (regex.test(content.name) || term === "") {
            el = $("#search-demo").clone().attr({ 'id': '', 'href': content.href });
            $(el).find(".content-icon").css('background-color', content.color);
            $(el).find(".theme").text(content.theme);
            $(el).find(".name").text(content.name);
            $(".search-results").append(el);
        }
    })
}

var searchOn = function () {
    $(".search-results").css("display", "block");
    $(".search-form").addClass("on-search");
    $(".header").addClass("header-hidden");
    $(".contents").addClass("contents-hidden");
    $(".clear-input").addClass("show-clear");
    search();
}

var searchOff = function () {
    $(".search-results").css("display", "none");
    console.log("searchoff");
    $(".main-search").blur(function () { this.value = "" });
    $(".search-form").removeClass("on-search");
    $(".header").removeClass("header-hidden");
    $(".contents").removeClass("contents-hidden");
    $(".clear-input").removeClass("show-clear");
}

$(".clear-button").click(function () {
    searchOff();
})
$(".main-search").focus(function () {
    searchOn();
}).on('input', function () {
    search();
});

var contents = [];

$(document).ready(function() {
  loadSearchable();
});
