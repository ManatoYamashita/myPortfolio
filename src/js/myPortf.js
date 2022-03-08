// myPortf.js

// define function of action.
function fadeAnime() {

    // a class name is 'fadeIn'
    $('.fadeIn').each(function() {
        // above elsements 50px.
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if(scroll >= elemPos - windowHeight) {
            // When elements are in screen, add a class that is named 'fadeIn'.
            $(this).addClass('fadeUp');
        } else {
            // When elements are out screen, remove a class named 'fadeIn'.
            $(this).removeClass('fadeUp');
        }
    });
}

// the actions when screen is scrolled.
$(window).scroll(function() {
    // call a function for animetion.
    fadeAnime();
});

// the actions when screen is loaded.
$(window).on('load', function() {
    // call a function for animetion.
    fadeAnime();
})