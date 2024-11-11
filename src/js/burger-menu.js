const initBurger = () => {
    const burgerNode = document.querySelector(".burger-menu");
    const menuNode = document.querySelector(".js-menu");
    const pageNode = document.querySelector(".js-page");

    burgerNode.addEventListener("click", (e) => {
        e.preventDefault();
        burgerNode.classList.toggle("burger-menu--active");
        menuNode.classList.toggle("menu--active");
    });

    pageNode.addEventListener("click", (e) => {
        e.preventDefault();
        if (burgerNode.classList.contains("burger-menu--active")) {
            burgerNode.classList.remove("burger-menu--active");
            menuNode.classList.remove("menu--active");
        }
    });
};

export default initBurger;