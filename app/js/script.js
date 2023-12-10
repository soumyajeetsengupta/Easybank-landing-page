const body = document.querySelector("body");
var hamburgureBTN = document.querySelector("#btn-hamburger");
var header = document.querySelector(".header");
var overlay = document.querySelector(".overlay");
var mobileMenu = document.querySelector(".header__menu");

hamburgureBTN.addEventListener("click", function(){
    header.classList.toggle('open');
    overlay.classList.toggle('has-fade');
    overlay.classList.toggle('fade-in');
    body.classList.toggle('noscroll');
    overlay.classList.toggle('fade-out', !overlay.classList.contains('fade-in'));
    mobileMenu.classList.toggle('has-fade');
    mobileMenu.classList.toggle('fade-in');
    mobileMenu.classList.toggle('fade-out', !mobileMenu.classList.contains('fade-in'));
});