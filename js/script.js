let count;

function initate() {
    count = 0;
}

let menu = $("#menu");
function toggleMenu() {
    if (count == 0) {
        menu.toggleClass("menu_open")
        count = 1;
    }
    else {
        menu.toggleClass("menu_closed");
        menu.toggleClass("menu_open")
    }
}