(function(){

  let button_variable = $('#button_info');
  let heroGetUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e1588be08057fa9f788890bd7aa3015c&hash=5f795f67235dfa4fc908dd641f015e07'

  function addHeroHTML(character) {
    let charImgURL = character.thumbnail.path + "." + character.thumbnail.extension
    return `<div class="character col-md-3 col-sm-6 col-xs-12">
              <div class="text-center thumbnail">
                <img src="${charImgURL}" alt="3-D Man">
                <div class="caption">
                  <h3>${character.name}</h3>
                </div>
              </div>
            </div>`
  }

  function loopHeroes(data) {
      let characters = data.data.results;
      for (let i = 0; i < characters.length; i++) {
        $('#heroesGrid').html($('#heroesGrid').html() + addHeroHTML(characters[i]));
      }
  }

$(function() {
  // The whole point of this function is to pass in fields from the API call to the front end corresponding HTML element, i had to piece
  // together the information with variables to push the data through.
  $.get(heroGetUrl, loopHeroes)

  // Putting search function together
  button_variable.click(function(e) {
    e.preventDefault();
    $('#heroesGrid').html('')
    let term = $("#search_box").val()
    console.log(term);

    let heroSearchURL = term ? `${heroGetUrl}&nameStartsWith=${term}` : heroGetUrl
    $.get(heroSearchURL, loopHeroes)

  })

})


})()
