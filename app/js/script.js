var hamburgureBTN = document.querySelector("#btn-hamburger");
var header = document.querySelector(".header");
var overlay = document.querySelector(".overlay");

hamburgureBTN.addEventListener("click", function(){
    header.classList.toggle('open');
    overlay.classList.toggle('fade-in');
    overlay.classList.toggle('fade-out', !overlay.classList.contains('fade-in'));
});