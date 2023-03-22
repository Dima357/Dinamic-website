window.addEventListener("DOMContentLoaded", function () {

    const burger = document.querySelector(".burger-container");
    const nav = document.querySelector(".nav");
    const nav__exit = document.querySelector(".nav__exit-icon");
    const icon_search = document.querySelector(".icon-search");
    const form__button_close = document.querySelector(".close-form-icon");

    const steps = document.querySelectorAll(".steps");
    const step__text = document.querySelectorAll(".step__text");


    burger.addEventListener("click", function () {
        nav.classList.add("burger__nav");
        nav__exit.style.display = "block";
    });


    nav__exit.addEventListener("click", function () {
        nav.classList.remove("burger__nav");
        nav__exit.style.display = "none";
    });


    icon_search.addEventListener("click", function () {
        document.querySelector(".header__form-container").style.display = "flex";
    });

    icon_search.addEventListener("keypress", function () {
        document.querySelector(".header__form-container").style.display = "flex";
    });


    form__button_close.addEventListener("click", function () {
        document.querySelector(".header__form-container").style.display = "none";
    });

    form__button_close.addEventListener("keypress", function () {
        document.querySelector(".header__form-container").style.display = "none";
    });



    steps.forEach(function (step) {
        step.addEventListener("click", function (event) {
            const path = event.target.dataset.path

            step__text.forEach(function (cur_step_text) {
                cur_step_text.style.display = "none";
            });

            document.querySelector(`[data-target="${path}"]`).style.display = "block";
            document.querySelector(".section-work__picture-container").style.backgroundImage = "url(../img/how-work/step-" + path + "-pic.jpg)";
        });
        
        step.addEventListener("keypress", function (event) {
            const path = event.target.dataset.path

            step__text.forEach(function (cur_step_text) {
                cur_step_text.style.display = "none";
            });

            document.querySelector(`[data-target="${path}"]`).style.display = "block";
            document.querySelector(".section-work__picture-container").style.backgroundImage = "url(../img/how-work/step-" + path + "-pic.jpg)";
        });
    });



    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: true,
        longSwipesRatio: 0.05,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }

    });

    /* через js поворот крестика
    const accordion_button = document.querySelectorAll(".accordion-button");
    const accordion__item_icon = document.querySelectorAll(".accordion-item__icon-container");

    accordion_button.forEach(function (accrd_btn) {
        accrd_btn.addEventListener("click", function () {

            const path = accrd_btn.getAttribute('aria-controls');
            accordion__item_icon.forEach(function (accrd__icon) {
                accrd__icon.classList.remove("accordion-icon_active");
            });
            
            document.querySelector(`[data-target="${path}"]`).classList.toggle("accordion-icon_active");
            
            accrd_btn.addEventListener("click", function () {
                document.querySelector(`[data-target="${path}"]`).classList.toggle("accordion-icon_active");
            });
            
        });
    });*/
});