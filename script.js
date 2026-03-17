/* ════════════════════════════════════════════════════════════
   Portfolio — script.js
   ════════════════════════════════════════════════════════════ */

/* ── Hamburger / mobile drawer ───────────────────────────── */
const toggle = document.getElementById('nav-toggle');
const drawer = document.getElementById('nav-drawer');

toggle.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close drawer when a link is clicked
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Active nav link on scroll ───────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  let current = '';
  const offset = 130;
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - offset) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

/* ── Scroll-triggered fade-up ────────────────────────────── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);   // fire once
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
