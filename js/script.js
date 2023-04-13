let menu = document.getElementById("menu");
let panel = document.getElementById("panel");
let recipe = document.getElementById("recipe");
let tag = document.getElementById("tag");
let about = document.getElementById("about");
let contact = document.getElementById("contact")

let count;
function initate() {
    count = 0;
    // showFlex(panel);
    // show(recipe);


}

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

function toHome(flag) {
    if (flag) {
        toggleMenu();
    }
    showFlex(panel);
    show(recipe);
    hide(tag);
    hide(about);
    hide(contact);
}
function toRecipes(flag) {
    if (flag) {
        toggleMenu();
    }
    hide(panel);
    show(recipe);
    hide(tag);
    hide(about);
    hide(contact);
}
function toTags(flag) {
    if (flag) {
        toggleMenu();
    }
    hide(panel);
    hide(recipe);
    show(tag);
    hide(about);
    hide(contact);
}
function toAbout(flag) {
    if (flag) {
        toggleMenu();
    }
    hide(panel);
    hide(recipe);
    hide(tag);
    hide(contact);
    showFlex(about);
}
function toContact(flag) {
    if (flag) {
        toggleMenu();
    }
    hide(panel);
    hide(recipe);
    hide(tag);
    hide(about);
    showFlex(contact);
}




function hide(element) {
    element.setAttribute("style", "display:none");

}

function show(element) {
    element.setAttribute("style", "display:block");

}
function showFlex(element) {
    element.setAttribute("style", "display:flex");

}