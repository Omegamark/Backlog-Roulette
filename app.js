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

    var url = "https://www.giantbomb.com/api/"
    var key = "0e979a8506def0657887d61aac192b8cefd60eec"
    var cors = "https://galvanize-cors-proxy.herokuapp.com/"


    $.get(cors + url + "search/?format=json&api_key=" + key + "&query=" + title, function(data) {




        var topBoxArt = data.results[0].image.medium_url;
        $boxArt.append(`<div><img src="` + topBoxArt + `"class="topBoxArt"></div>`)
        console.log(topBoxArt);
        var gameArray = []




            var gameImage = data.results[0].image.medium_url;
            var gameName = data.results[0].name;
            var gameDescription = data.results[0].deck;

            var $listItem = $(`<li class="collection-item avatar">
                <img src="` + gameImage + `" alt="" class="circle">
                <span class="title">` + gameName + `</span>
                <p>` + gameDescription + `
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">Score</i></a>
            </li>`);

            $gameList.append($listItem);



            var initialGame = data.results[0].api_detail_url
            console.log("initial Game:", initialGame)
            console.log(data);





//*Use this to get similar games urls

        var similarGames = [];
        var gameId = cors + data.results[0].api_detail_url
        $.get(gameId + `?format=json&api_key=` + key, function(game) {
            console.log(game);
            for (var j = 0; j < game.results.similar_games.length; j++) {
              similarGames.push(game.results.similar_games[j])



              // var $listItem = $(`<li class="collection-item avatar">
              //     <img src="` + gameImage + `" alt="" class="circle">
              //     <span class="title">` + gameName + `</span>
              //     <p>` + gameDescription + `
              //     </p>
              //     <a href="#!" class="secondary-content"><i class="material-icons">Score</i></a>
              // </li>`);
              //Want to return 5 random results from this array

            }
            // var randomGames = [];
            // for (var k = 0; k < similarGames.length; k++) {
            //   randomGames.push(similarGames[Math.floor(Math.random() * similarGames.length)]);
            //
            // }
            var fiveRandomGames = [];
            for (var l = 0; l < 5; l++) {
              var randomGame = getUniqueRandomGame(similarGames, fiveRandomGames);
              fiveRandomGames.push(randomGame);

            }
          //
          //
          //
            console.log("randomgames:", fiveRandomGames);
            console.log(similarGames);
            console.log(gameId);




            var fiveRandomGamesIndividual = [];
            for (var m = 0; m < fiveRandomGames.length; m++) {
              $.get(cors + fiveRandomGames[m].api_detail_url + `?format=json&api_key=` + key, function(random) {
                fiveRandomGamesIndividual.push(random.results)

                console.log("fiveRandom:", fiveRandomGamesIndividual);

                var randomGameImage = random.results.image.medium_url;
                var randomGameName = random.results.name;
                var randomGameDescription = random.results.deck;

              var $listItemRandom = $(`<li class="collection-item avatar">
                   <img src="` + randomGameImage + `" alt="" class="circle">
                   <span class="title">` + randomGameName + `</span>
                   <p>` + randomGameDescription + `
                   </p>
                   <a href="#!" class="secondary-content"><i class="material-icons">Score</i></a>
              </li>`);

              console.log(randomGameImage);
              console.log(randomGameName);
              console.log(randomGameDescription);

              $gameList.append($listItemRandom);

              })

            // *Get all 5 games from the fiveRandomGames array, add the urls to a variable and concat with the li to append to the DOM.

          }


            // $randomListItem = $(`<li class="collection-item avatar">
            //     <img src="` + randomGameImage + `" alt="" class="circle">
            //     <span class="title">` + randomGameName + `</span>
            //     <p>` + randomGameDescription + `
            //     </p>
            //     <a href="#!" class="secondary-content"><i class="material-icons">Score</i></a>
            // </li>`);







})
})
}


function getUniqueRandomGame (games, randomGames) {
  while (true) {
    var randomGame = games[Math.floor(Math.random() * games.length)];
    if (randomGames.indexOf(randomGame) == -1) {
      return randomGame;
    }
  }

}
