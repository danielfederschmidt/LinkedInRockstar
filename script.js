window.onload = function() {
    /* Get level description DOM element */
    var caption = document.querySelector(".current-level-description");

    /* Change text during animation to Rockstar - Because you rock. */
    if (caption) {
        setTimeout(function () {
                caption.innerHTML = "Rockstar";
        }, 1000);
    }
}
