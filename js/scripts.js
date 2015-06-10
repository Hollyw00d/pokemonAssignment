// Adding a User with jQuery Assignment
$(function() {

    // Append pokemon images to 1 to 151 inside a paragraph tag
    for(var i = 1; i < 152; i++) {
        $("p").append("<img src='http://pokeapi.co/media/img/" + i + ".png' />");
    }

});