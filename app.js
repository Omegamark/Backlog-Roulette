// www.giantbomb.com/api/search/?format=json&api_key=0e979a8506def0657887d61aac192b8cefd60eec&query=river_city_ransom
console.log("ok");
$(document).ready(function() {
  var title = $(input).val()
  var url = "www.giantbomb.com/api/"
  var key = "0e979a8506def0657887d61aac192b8cefd60eec"
  $.get(url + "search/?format=json&api_key=" + key + "&query=" + title, function(data) {

    console.log(data);



  })
})
