/* Fade-in + Slide-in Animation for sections & project cards */
const sections = document.querySelectorAll(".section");
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight - 100;

    // Sections fade in
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < triggerBottom){
            section.classList.add("visible");
        }
    });

    // Project cards slide in
    projectCards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;
        if(top < triggerBottom){
            card.classList.add("visible");
            // Alternate left/right slide
            if(index % 2 === 0){
                card.classList.remove("slide-right");
            } else {
                card.classList.add("slide-right");
            }
        }
    });
});
/* Typing Animation */
const roles = [
    "Full-Stack Developer",
    "Django Developer",
    "React Developer",
    "MERN Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

