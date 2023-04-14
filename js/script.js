recipes = document.querySelectorAll(".recipe-detail");

function initate() {
    count = 0;

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

function setRecipe(id) {
    localStorage.setItem("recipeid", id);
}

function getRecipe() {
    initate();
    recipe = document.querySelector("#" + localStorage.getItem("recipeid") + "-recipe");

    recipes.forEach(ele => {
        ele.style.display = "none";
    });
    recipe.setAttribute("Style", "display:block")

}
