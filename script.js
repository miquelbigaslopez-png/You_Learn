// ===============================
// MENÚ QUE CANVIA EN FER SCROLL
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// ANIMACIÓ DE LES TARGETES AL FER SCROLL
// ===============================

const cards = document.querySelectorAll(".card, .size, details");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


// ===============================
// EFECTE EN ELS BOTONS
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
    });

});