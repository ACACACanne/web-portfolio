const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});

const nav = document.getElementById('mobile-nav');
      const openNavBtn = document.getElementById('nav__toggle-open');
      const closeNavBtn = document.getElementById('nav__toggle-close');

      openNavBtn.addEventListener('click', () => {
        nav.classList.remove('hidden');
        openNavBtn.classList.add('hidden');
        closeNavBtn.classList.remove('hidden');
      });

      closeNavBtn.addEventListener('click', () => {
        nav.classList.add('hidden');
        openNavBtn.classList.remove('hidden');
        closeNavBtn.classList.add('hidden');
      });

      // Theme toggle (optional enhancement)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

