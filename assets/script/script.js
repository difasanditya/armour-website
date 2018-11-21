$(document).ready(function(){
    document.querySelector("body").fakeScroll();
    // if($(".fakeScroll__content > div").length) $(".fakeScroll__content > div").remove();
    var typed = new Typed('#typed', {
        strings: ["Hello World!", "Welcome to Armour Website", "Scroll down to continue!", "Or do whatever you want^1000, lol"],
        loop: true,
        loopCount: Infinity,
        typeSpeed: 35,
        backSpeed: 35,
        backDelay: 2750,
        cursorChar: "_"
    });
})