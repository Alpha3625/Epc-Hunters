const initSlider = () => {
    const sliderItems = document.querySelectorAll(".home__item");

    const sliderBtnNext = document.querySelector(".btn-next");
    const sliderBtnPrev = document.querySelector(".btn-prev");

    let activeSlideId = 0;
    const sliderInitWidth = 768;

    function nextSlide(e) {
        e.preventDefault();
        activeSlideId += 1;
        if (activeSlideId > sliderItems.length - 1) {
            activeSlideId = 0;
        }
        sliderRender(activeSlideId);
    }

    function prevSlide(e) {
        e.preventDefault();
        activeSlideId -= 1;
        if (activeSlideId < 0) {
            activeSlideId = sliderItems.length - 1;
        }
        sliderRender(activeSlideId);
    }

    sliderBtnPrev.addEventListener("click", prevSlide);
    sliderBtnNext.addEventListener("click", nextSlide);

    function sliderRender(id) {
        sliderItems.forEach((item, index) => {
            item.style.opacity = index === id ? "1" : "0";
        });
    }

    function disableSlider() {
        sliderItems.forEach(item => {
            item.style.opacity = "";
        });
        activeSlideId = 0;
    }

    function checkScreenSize() {
        if (window.innerWidth < sliderInitWidth) {
            sliderRender(activeSlideId);
        } else {
            disableSlider();
        }
    }

    window.addEventListener("DOMContentLoaded", checkScreenSize);
    window.addEventListener("resize", checkScreenSize);
};

export default initSlider;