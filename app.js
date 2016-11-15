// www.giantbomb.com/api/search/?format=json&api_key=0e979a8506def0657887d61aac192b8cefd60eec&query=river_city_ransom
console.log("ok");
$(document).ready(function() {
    //var title = $(input).val()
    $('form').submit(textInput)

})

function textInput(e) {
    e.preventDefault();
    var title = $('input').val();

    var url = "https://galvanize-cors-proxy.herokuapp.com/https://www.giantbomb.com/api/"
    var key = "0e979a8506def0657887d61aac192b8cefd60eec"
    $.get(url + "search/?format=json&api_key=" + key + "&query=" + title, function(data) {

        var $gameList = $('#list')



        var topBoxArt = data.results[0].image.medium_url;
        $('#boxArt').append(`<div data-role="collapsible"><img src="` + topBoxArt + `"class="topBoxArt"></div>`)
        console.log(topBoxArt);


        for (var i = 0; i < 5; i++) {

            var gameImage = data.results[i].image.medium_url;
            var gameName = data.results[i].name;
            var gameDescription = data.results[i].deck;

            var $listItem = $(`<li class="collection-item avatar">
                <img src="` + gameImage + `" alt="" class="circle">
                <span class="title">` + gameName + `</span>
                <p>` + gameDescription + `
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>`);

            $gameList.append($listItem);



            console.log(data);


        }

    })
}
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
    document.getElementById("mySidenavright").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenavright").style.width = "0";
}
