$(document).ready(function(){
    armourSound = new Audio("assets/music/armour.mp3");
    document.querySelector("#console").fakeScroll();
    var typed = new Typed('#typed', {
        strings: ["Hello World!", "Welcome to Armour Website", "Scroll down to continue!", "Or click the link above", "Or do whatever you want^800, lol"],
        loop: true,
        loopCount: Infinity,
        typeSpeed: 35,
        backSpeed: 35,
        backDelay: 2750,
        cursorChar: "_"
    });
    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
    $("#pronounce").click(function() {
        armourSound.play();
    });
})