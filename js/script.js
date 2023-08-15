const mobileMenu = document.querySelector(".mobile-menu");

const mainMenu = document.querySelector(".main-menu");

mobileMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("open")
})