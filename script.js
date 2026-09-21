// ============================================
// Typing effect for hero tagline
// ============================================
const roles = [
  "MCA student.",
  "Building with Python, HTML, CSS & JS.",
  "Percussionist & instructor."
];

const typingEl = document.getElementById("typingText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingEl) return;

  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 30 : 55;
  setTimeout(typeLoop, speed);
}

typeLoop();

// ============================================
// Waveform bars (decorative, tied to percussion theme)
// ============================================
const waveform = document.getElementById("waveform");
if (waveform) {
  const barCount = 24;
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("span");
    const height = 12 + Math.random() * 28;
    const delay = (Math.random() * 1.2).toFixed(2);
    bar.style.height = `${height}px`;
    bar.style.animationDelay = `${delay}s`;
    waveform.appendChild(bar);
  }
}

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
