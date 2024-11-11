const initBurger = () => {
    const burgerNode = document.querySelector(".burger-menu");
    const headerLogoNode = document.querySelector(".header__logo");
    const menuNode = document.querySelector(".js-menu");
    const pageNode = document.querySelector(".js-page");

    burgerNode.addEventListener("click", (e) => {
        e.preventDefault();
        burgerNode.classList.toggle("active");
        menuNode.classList.toggle("active");
        headerLogoNode.classList.toggle("active");
    });

    pageNode.addEventListener("click", (e) => {
        e.preventDefault();
        if (burgerNode.classList.contains("active")) {
            burgerNode.classList.remove("active");
            menuNode.classList.remove("active");
            headerLogoNode.classList.remove("active");
        }
    });
};

export default initBurger;