const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
    if (isOpen) {
        navLinks.classList.add("close");
        navLinks.addEventListener(
            "animationend",
            (e) => {
                navLinks.classList.remove("open");
                navLinks.classList.remove("close");
            },
            { once: true }
        );
    } else {
        navLinks.classList.add("open");
    };
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute('class', "ri-menu-line");
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal('.header__container .section__subheader', {
    ...ScrollRevealOption,
});
ScrollReveal().reveal('.header__container .section__header', {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.header__container .scroll__btn', {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal('.header__container .header__socials', {
    ...ScrollRevealOption,
    origin: "left",  
    delay: 1500,
});


ScrollReveal().reveal(".about__image-1, .about__image-3", {
    ...ScrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
    ...ScrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content, .section__header", {
    ...ScrollRevealOption,
    delay: 1000
});
ScrollReveal().reveal(".about__content p", {
    ...ScrollRevealOption,
    delay: 1500, 
});
ScrollReveal().reveal(".about__content .about__btn", {
    ...ScrollRevealOption,
    delay: 2000, 
});