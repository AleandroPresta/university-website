const navLinks = document.querySelector('.nav-links');

function hideMenu() {
    navLinks.style.right = "-200px";
}

function showMenu() {
    navLinks.style.right = "0";
}