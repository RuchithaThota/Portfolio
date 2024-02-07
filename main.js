const hamburger = document.getElementById("ham-menu");
const hamburgerClose = document.getElementById("ham-menu-close");
const menu = document.querySelector(".header__sm-links")

const activateHamburger = () => {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none"
    menu.style.display = "none"
}
const deActivateHamburger = () => {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block"
    menu.style.display = "block"
}
//hamburger event
hamburger.addEventListener("click", (e) => {
    deActivateHamburger();
})
//hamburgerClose event
hamburgerClose.addEventListener("click", () => {
    activateHamburger();
})
//smLinks event
const smLinks = document.querySelector(".header__sm-links");
smLinks.addEventListener("click", (e) => {
    if (e.target.closest("a").classList.contains("header__link")) {
        activateHamburger();
    }
})