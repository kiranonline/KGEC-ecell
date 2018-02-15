$(window).on('load', function() {
    // executes when complete page is fully loaded, including all frames, objects and images


    //mobile view navbar
    function toggleClassMenu() {
        myMenu.classList.add("menu--animatable");
        if (!myMenu.classList.contains("menu--visible")) {
            myMenu.classList.add("menu--visible");
        } else {
            myMenu.classList.remove('menu--visible');
        }
    }

    function OnTransitionEnd() {
        myMenu.classList.remove("menu--animatable");
    }

    var myMenu = document.querySelector(".menu");
    var oppMenu = document.querySelector(".menu-icon");
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    oppMenu.addEventListener("click", toggleClassMenu, false);
    myMenu.addEventListener("click", toggleClassMenu, false);

    //mobile view navbar ends


});