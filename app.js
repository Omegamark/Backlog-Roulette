// www.giantbomb.com/api/search/?format=json&api_key=0e979a8506def0657887d61aac192b8cefd60eec&query=river_city_ransom
console.log("ok");
$(document).ready(function() {
    //var title = $(input).val()
    $('form').submit(textInput)

})

function textInput(e) {
    e.preventDefault();
    var title = $('input').val();

    var $gameList = $('#list')
    $gameList.html('');
    var $boxArt = $('#boxArt')
    $boxArt.html('')

    var url = "https://galvanize-cors-proxy.herokuapp.com/https://www.giantbomb.com/api/"
    var key = "0e979a8506def0657887d61aac192b8cefd60eec"



    $.get(url + "search/?format=json&api_key=" + key + "&query=" + title, function(data) {




        var topBoxArt = data.results[0].image.medium_url;
        $boxArt.append(`<div><img src="` + topBoxArt + `"class="topBoxArt"></div>`)
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
                <a href="#!" class="secondary-content"><i class="material-icons">Score</i></a>
            </li>`);

            $gameList.append($listItem);



            console.log(data);


        }
        var similarGames = [game.results.similarGames]
        var gameId = 'data.results[0].api_detail_url'
        $.get(gameId + `?format=json&api_key=` + key, function(game) {
            for (var i = 0; i < game.results.similar_games.length; i++) {
              similarGames.push(results[0])
              //Want to return 5 random results from this array

            }

        })

    })



}
