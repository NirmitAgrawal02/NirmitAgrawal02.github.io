/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-13%";
    }
    prevScrollpos = currentScrollPos;
}


// $(document).ready(function () {
//     var titles = new Typed('#titles', {
//         strings: ['Software Developer^2500', 'Computer Engineer^2500', 'Music Lover^2500', 'Chess Player^2500', 'Otaku'],
//         shuffle: true,
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 100,
//         cursorChar: ' ',
//     })
// })
