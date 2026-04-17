/* ── Typing animation ── */
const phrases = [
  'Cybersecurity Student',
  'Penetration Tester',
  'CTF Competitor',
  'Security Researcher',
  'Network Defender',
];

let pIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typedText');

function type() {
  const phrase = phrases[pIdx];
  el.textContent = deleting
    ? phrase.slice(0, cIdx - 1)
    : phrase.slice(0, cIdx + 1);

  deleting ? cIdx-- : cIdx++;

  let delay = deleting ? 45 : 95;

  if (!deleting && cIdx === phrase.length) {
    delay = 2200;
    deleting = true;
  } else if (deleting && cIdx === 0) {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
    delay = 450;
  }

  setTimeout(type, delay);
}

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobile nav toggle ── */
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close mobile nav on link click */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.skill-card, .project-card, .resume-item, .contact-item, .about-text, .about-terminal'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ── Start typing after hero animates in ── */
setTimeout(type, 1100);
