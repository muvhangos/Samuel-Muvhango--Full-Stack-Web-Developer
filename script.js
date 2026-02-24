// Skill reveal on scroll
const skills = document.querySelectorAll(".skill");

function revealSkills() {
  const triggerBottom = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if (skillTop < triggerBottom) {
      skill.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);
