let count;

function initate() {
    count = 0;
}

let menu = document.getElementById("menu");
function toggleMenu() {
    if (count == 0) {
        menu.classList.toggle("menu_open")
        count = 1;
    }
    else {
        menu.classList.toggle("menu_closed");
        menu.classList.toggle("menu_open")
    }
}