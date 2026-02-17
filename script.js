const skills = [
  "HTML5", "CSS3", "JavaScript", "Node.js",
  "React", "MongoDB", "Django",
  "School Registration App",
  "Service Request Portal",
  "Lottery Analyzer"
];

const track = document.getElementById("skills-track");

skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.textContent = skill;
    track.appendChild(div);
});

let scroll = 0;

function animate() {
    scroll++;
    track.style.transform = `translateX(-${scroll}px)`;

    if (scroll > track.scrollWidth / 2) {
        scroll = 0;
    }

    requestAnimationFrame(animate);
}

animate();

// Typewriter
const text = "Full Stack Developer";
const type = document.getElementById("typewriter");
let i = 0;

function typing() {
    if (i < text.length) {
        type.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();
