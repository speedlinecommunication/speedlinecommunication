const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.classList.add("show");
        }
    });
});
