const btnMenu = document.querySelector(".fa-bars");
const btnClose = document.querySelector(".fa-times");

// open menu
btnMenu.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").classList.add("active")
});

// close menu
btnClose.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").classList.remove("active")
});