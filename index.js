/* -----------------------------------------
   PROJECT DATA
----------------------------------------- */

const webProjects = [
  {
    title: 'Weather App',
    summary: 'A responsive weather dashboard using live API data.',
    live: 'https://weather-application-jet-phi.vercel.app/',
    github: 'https://github.com/ACACACanne/weather-application',
    page: 'projects/web/project-1.html',
    tag: ['WebDev', 'UIUX', 'React', 'TailwindCSS', 'API'],
  },
  {
    title: 'Interactive Quiz App',
    summary: 'A dynamic quiz with animations and scoring logic.',
    live: 'https://acacacanne.github.io/interactive-learning-style-quiz-assignment/',
    github: 'https://github.com/ACACACanne/interactive-learning-style-quiz-assignment',
    page: 'projects/web/project-2.html',
    tag: ['WebDev', 'UIUX', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Portfolio Website',
    summary: 'A cinematic personal portfolio with 3D slider.',
    live: '#',
    github: 'https://github.com/ACACACanne/web-portfolio',
    page: 'projects/web/project-3.html',
    tag: ['WebDev', 'UIUX', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Caesar Cipher Tool',
    summary: 'Encrypt and decrypt messages using classical ciphers.',
    live: 'https://acacacanne.github.io/project-caesar-cipher/',
    github: 'https://github.com/ACACACanne/project-caesar-cipher',
    page: 'projects/web/project-4.html',
    tag: ['WebDev', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Recipe Finder',
    summary: 'Search recipes using a public API with filters.',
    live: '#',
    github: '#',
    page: 'projects/web/project-5.html',
    tag: ['WebDev', 'API', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Task Manager App',
    summary: 'A clean productivity tool using LocalStorage.',
    live: '#',
    github: '#',
    page: 'projects/web/project-6.html',
    tag: ['WebDev', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Memory Game',
    summary: 'A card‑matching game with animations.',
    live: '#',
    github: '#',
    page: 'projects/web/project-7.html',
    tag: ['WebDev', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Landing Page',
    summary: 'A modern, responsive landing page.',
    live: '#',
    github: '#',
    page: 'projects/web/project-8.html',
    tag: ['WebDev', 'UIUX', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Movie Explorer',
    summary: 'Browse movies using a public API.',
    live: '#',
    github: '#',
    page: 'projects/web/project-9.html',
    tag: ['WebDev', 'API', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Text Adventure Game',
    summary: 'A story‑driven interactive game.',
    live: 'https://acacacanne.github.io/text-adventure-game-assignment/',
    github: 'https://github.com/ACACACanne/text-adventure-game-assignment',
    page: 'projects/web/project-10.html',
    tag: ['WebDev', 'JavaScript', 'HTML', 'CSS'],
  },
]

const dataProjects = [
  {
    title: 'Rental Price Prediction',
    summary: 'Machine learning model predicting rental prices.',
    live: '#',
    github: '#',
    page: 'projects/data/project-1.html',
    tag: ['DataScience', 'MachineLearning', 'Python'],
  },
  {
    title: 'Customer Segmentation',
    summary: 'Clustering analysis for marketing insights.',
    live: '#',
    github: '#',
    page: 'projects/data/project-2.html',
    tag: ['DataScience', 'Analytics', 'Python'],
  },
  {
    title: 'SQL50 Challenge',
    summary: '50 SQL problems solved with explanations.',
    live: '#',
    github: '#',
    page: 'projects/data/project-3.html',
    tag: ['DataScience', 'SQL', 'Python'],
  },
  {
    title: 'Sales Forecasting',
    summary: 'Time‑series forecasting using Python.',
    live: '#',
    github: '#',
    page: 'projects/data/project-4.html',
    tag: ['DataScience', 'MachineLearning', 'Python'],
  },
  {
    title: 'Fraud Detection',
    summary: 'Classification model for fraud detection.',
    live: '#',
    github: '#',
    page: 'projects/data/project-5.html',
    tag: ['DataScience', 'MachineLearning', 'Python'],
  },
  {
    title: 'Data Cleaning Pipeline',
    summary: 'Automated preprocessing workflow.',
    live: '#',
    github: '#',
    page: 'projects/data/project-6.html',
    tag: ['DataScience', 'Python'],
  },
  {
    title: 'PowerBI Dashboard',
    summary: 'Interactive business intelligence dashboard.',
    live: '#',
    github: '#',
    page: 'projects/data/project-7.html',
    tag: ['DataScience', 'Python'],
  },
  {
    title: 'NLP Sentiment Model',
    summary: 'Text sentiment classifier using ML.',
    live: '#',
    github: '#',
    page: 'projects/data/project-8.html',
    tag: ['DataScience', 'Python'],
  },
  {
    title: 'A/B Testing Analysis',
    summary: 'Statistical experiment evaluation.',
    live: '#',
    github: '#',
    page: 'projects/data/project-9.html',
    tag: ['DataScience', 'Python'],
  },
  {
    title: 'Web Scraper',
    summary: 'Python scraper for structured data extraction.',
    live: '#',
    github: '#',
    page: 'projects/data/project-10.html',
    tag: ['DataScience', 'Python'],
  },
]

document.addEventListener('DOMContentLoaded', () => {
  /* RENDER PROJECTS */
  function loadProjects(category) {
    const container = document.getElementById('project-container')
    if (!container) return

    container.innerHTML = ''

    const list = category === 'web' ? webProjects : dataProjects

    list.forEach((project, index) => {
      const card = document.createElement('div')
      card.classList.add('project-card')

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        <div class="project-links">
          <a href="${project.live}" target="_blank">Live Demo</a>
          <a href="${project.github}" target="_blank">GitHub</a>
          <a href="${project.page}">Case Study</a>
          <a href="index.html#contact">Contact Me</a>
        </div>
      `

      container.appendChild(card)

      setTimeout(() => {
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, 100 * index)
    })
  }

  /* TAB SWITCHING */
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')

      loadProjects(btn.dataset.category)
    })
  })

  /* DEFAULT: WEB DEVELOPMENT */
  loadProjects('web')

  /* SCROLLREVEAL */
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400,
    })

    ScrollReveal().reveal('.heading', { delay: 200, origin: 'top' })
    ScrollReveal().reveal('.skills-grid, .about-section', { delay: 300, origin: 'bottom' })
    ScrollReveal().reveal('.skill-card', { interval: 200, origin: 'right' })
  }

  /* NAVBAR TOGGLE */
  let menuIcon = document.querySelector('#menu-icon')
  let navbar = document.querySelector('.navbar')

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x')
      navbar.classList.toggle('active')
    }
  }

  /* ACTIVE NAV LINK ON SCROLL */
  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header nav a')

  window.addEventListener('scroll', () => {
    let top = window.scrollY

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150
      let height = sec.offsetHeight
      let id = sec.getAttribute('id')

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active')
          const activeLink = document.querySelector('header nav a[href*=' + id + ']')
          if (activeLink) activeLink.classList.add('active')
        })
      }
    })

    let header = document.querySelector('header')
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100)
    }

    if (menuIcon && navbar) {
      menuIcon.classList.remove('bx-x')
      navbar.classList.remove('active')
    }
  })

  /* TYPED.JS */
  if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
      strings: [
        'Creative Technologist',
        'Full Stack Developer',
        'Data Analyst',
        'Poetic UI Designer',
        'Data-Driven Thinker',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    })
  }

  /* PAGE FLIP (SINGLE, CLEAN VERSION) */
  const pages = document.querySelectorAll('.page')
  if (pages.length > 0) {
    let currentPage = 0

    function showPage(index) {
      pages.forEach((page, i) => {
        page.style.transform = i === index ? 'rotateY(0deg)' : 'rotateY(-180deg)'
      })
    }

    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')

    if (nextBtn) {
      nextBtn.onclick = () => {
        currentPage = (currentPage + 1) % pages.length
        showPage(currentPage)
      }
    }

    if (prevBtn) {
      prevBtn.onclick = () => {
        currentPage = (currentPage - 1 + pages.length) % pages.length
        showPage(currentPage)
      }
    }

    showPage(currentPage)
  }
})
