// MENU TOGGLE
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});
