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
            if (index === id) {
                item.style = "opacity: 1";
            } else {
                item.style = "opacity: 0";
            }
        });
    }

    function disableSlider() {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style = "";
        }
        activeSlideId = 0;
    }

    window.addEventListener("DOMContentLoaded", (e) => {
        if (e.target.outerWidth < sliderInitWidth) {
            sliderRender(activeSlideId);
        } else {
            disableSlider();
        }
    });
    window.onresize = (e) => {
        if (e.target.outerWidth < sliderInitWidth) {
            sliderRender(activeSlideId);
        } else {
            disableSlider();
        }
    };
};

export default initSlider;