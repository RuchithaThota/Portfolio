const hamburger = document.getElementById("ham-menu");
const hamburgerClose = document.getElementById("ham-menu-close");
const menu = document.querySelector(".header__sm-links")
//hamburger event
hamburger.addEventListener("click", (e) => {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block"
    menu.style.display = "block"
})
//hamburgerClose event
hamburgerClose.addEventListener("click", () => {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none"
    menu.style.display = "none"
})
