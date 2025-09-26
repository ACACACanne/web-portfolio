// ScrollReveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.heading', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.skills-grid, .about-section', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.skill-card', { interval: 200, origin: 'right' });

// Navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Active section link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Typed.js intro (optional)
const typed = new Typed('.multiple-text', {
  strings: ['Creative Technologist', "Full Stack Developer", "Data Analyst", 'Poetic UI Designer', 'Data-Driven Thinker'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

