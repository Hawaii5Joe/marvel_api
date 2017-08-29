(function(){let button_variable = $('#button_info');

$(function() {
$.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e1588be08057fa9f788890bd7aa3015c&hash=5f795f67235dfa4fc908dd641f015e07", function(data) {
  let characters = data.data.results;
  for (let i = 0; i < characters.length; i++) {
    // console.log(characters[i].name)
    let thumbnail_path = characters[i].thumbnail.path;
    let thumbnail_extension = characters[i].thumbnail.extension;
    let thumbnail_url = thumbnail_path + "." + thumbnail_extension;
    $('#hero_row').append('<tr><td>' + characters[i].name + '</td><td><img width=350px src="' + thumbnail_url + '"/></td></tr>');

  }


})

// Putting search function together
button_variable.click(function(e) {
  e.preventDefault();
  $('#hero_row').html("")
  console.log($("#search_box").val());


  $.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e1588be08057fa9f788890bd7aa3015c&hash=5f795f67235dfa4fc908dd641f015e07&nameStartsWith=" + $("#search_box").val(), function(data) {
    let characters = data.data.results;
    for (let i = 0; i < characters.length; i++) {
      // console.log(characters[i].name)
      let thumbnail_path = characters[i].thumbnail.path;
      let thumbnail_extension = characters[i].thumbnail.extension;
      let thumbnail_url = thumbnail_path + "." + thumbnail_extension;
      $('#hero_row').append('<tr><td>' + characters[i].name + '</td><td><img width=150px src="' + thumbnail_url + '"/></td></tr>');

    }

  })

})

})




})()
