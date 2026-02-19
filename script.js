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
