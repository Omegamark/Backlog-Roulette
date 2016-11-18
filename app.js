// www.giantbomb.com/api/search/?format=json&api_key=0e979a8506def0657887d61aac192b8cefd60eec&query=river_city_ransom
console.log("ok");



$(document).ready(function() {
    //var title = $(input).val()
    $('form').submit(textInput)

});

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

        fiveRandomGamesIndividual = [];
        var fiveRandomGamesIndividual = [];
        console.log("Individual Games", fiveRandomGamesIndividual);


        var topBoxArt = data.results[0].image.medium_url;
        $boxArt.append(`<div><img src="` + topBoxArt + `"class="topBoxArt"></div>`)
        console.log(topBoxArt);
        var gameArray = []



        var gameLink = data.results[0].site_detail_url
        var gameImage = data.results[0].image.medium_url;
        var gameName = data.results[0].name;
        var gameDescription = data.results[0].deck;

        var $listItem = $(`<li class="collection-item avatar">
                <a href="` + gameLink + `"><img src="` + gameImage + `" alt="" class="circle"></a>
                <span class="title">` + gameName + `</span>
                <p>` + gameDescription + `
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
            </li>`);
            //*Add a link to show the score on the last line "secondary-content" above.

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





            for (var m = 0; m < fiveRandomGames.length; m++) {
                $.get(cors + fiveRandomGames[m].api_detail_url + `?format=json&api_key=` + key, function(random) {
                    fiveRandomGamesIndividual.push(random.results)

                    console.log("fiveRandom:", fiveRandomGamesIndividual);

                    var randomGameLink = random.results.site_detail_url;
                    var randomGameImage = random.results.image.medium_url;
                    var randomGameName = random.results.name;
                    var randomGameDescription = random.results.deck;

                    var $listItemRandom = $(`<li class="collection-item avatar">
                   <a href="` + randomGameLink + `"><img src="` + randomGameImage + `" alt="" class="circle"></a>
                   <span class="title">` + randomGameName + `</span>
                   <p>` + randomGameDescription + `
                   </p>
                   <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
              </li>`);

                    console.log(randomGameImage);
                    console.log(randomGameName);
                    console.log(randomGameDescription);

                    $gameList.append($listItemRandom);

                    $('canvas').html('')
                    $("#wheelButton").off()
                    if (fiveRandomGamesIndividual.length == 5) {
                        //*Wheel Initializer*//
                        var settings = {
                            el: 'wheel', // Canvas id.
                            members: [fiveRandomGamesIndividual[0].name, fiveRandomGamesIndividual[1].name, fiveRandomGamesIndividual[2].name, fiveRandomGamesIndividual[3].name, fiveRandomGamesIndividual[4].name], // Array of members.
                            colors: ['#C7181D', '#FCB937', '#A1B836', '#371979', 'yellow'], // Background color of each member.
                            radius: 250 // wheel radius
                        };

                        // Create a wheel instance with settings.
                        var wheel = new Wheel(settings);

                        // Initialize the wheel.
                        wheel.init();

                        // Spin the wheel with a callback after it is done.
                        wheel.spin(function(member) {
                            alert("You should play: " + member);
                        });

                        $("#wheelButton").on('click', function() {
                                wheel.spin(function(member) {
                                    alert("You should play: " + member);
                                });
                            })
                            //*Wheel Initializer*//

                    }

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
//*Comparing games to random games so titles don't repeat
function getUniqueRandomGame(games, randomGames) {
    while (true) {
        var randomGame = games[Math.floor(Math.random() * games.length)];
        if (randomGames.indexOf(randomGame) == -1) {
            return randomGame;
        }
    }

}
$('canvas').loading-indicator();
// //*Wheel Initializer*//
// var settings = {
//   el: 'wheel', // Canvas id.
//   members: [fiveRandomGamesIndividual[0], fiveRandomGamesIndividual[1], fiveRandomGamesIndividual[2], fiveRandomGamesIndividual[3], fiveRandomGamesIndividual[4]], // Array of members.
//   colors: ['#C7181D', '#FCB937', '#A1B836', '#371979', 'blue'], // Background color of each member.
//   radius: 250 // wheel radius
// };
//
// // Create a wheel instance with settings.
// var wheel = new Wheel(settings);
//
// // Initialize the wheel.
// wheel.init();
//
// // Spin the wheel with a callback after it is done.
// wheel.spin(function(member) {
//   alert(member);
// });
//
// document.getElementById("wheelButton").addEventListener('click', function() {
//   wheel.spin(function(member) {
//     alert(member);
//   });
// })
// //*Wheel Initializer*//
