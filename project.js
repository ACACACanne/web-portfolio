/* -----------------------------------------
   BLOG POST DATA
----------------------------------------- */

const projectPosts = [
  {
    title: 'Weather Forecast Dashboard',
    summary:
      'A responsive, modular weather experience built with React and Tailwind CSS, blending data, design, and poetic storytelling.',
    tags: ['WebDev', 'UIUX'],
    summary:
      'Key features include live API data, dynamic backgrounds, and a cinematic design inspired by the Midnight Journal aesthetic.',
    tags: ['WebDev', 'UIUX', 'NextJS', 'TailwindCSS', 'API', 'React'],
    link: 'web/projects/web/project-1.html',
  },
  {
    title: 'Interactive Learning Style Quiz App',
    summary:
      'An engaging quiz application designed to help users discover their preferred learning style through interactive questions and personalized feedback.',
    tags: ['WebDev', 'UIUX', 'JavaScript', 'HTML', 'CSS'],
    link: 'web/projects/web/project-2.html',
  },
  {
    title: 'Data Visualization App',
    summary:
      'A sleek data visualization tool that transforms complex datasets into intuitive, interactive charts and graphs.',
    tags: ['DataScience', 'UIUX', 'JavaScript', 'D3.js'],
    link: 'web/projects/web/project-3.html',
  },
  {
    title: 'Personal Portfolio Website',
    summary:
      'A cinematic portfolio showcasing my projects and design philosophy, built with a custom 3D slider and immersive animations.',
    tags: ['WebDev', 'UIUX', 'NextJS', 'TailwindCSS', '3D', 'Animation'],
    link: 'web/projects/web/project-4.html',
  },
]

/* -----------------------------------------
   RENDER BLOG POSTS
----------------------------------------- */

function renderPosts(posts) {
  const container = document.getElementById('projectContainer')
  container.innerHTML = ''

  posts.forEach((post, index) => {
    const card = document.createElement('div')
    card.classList.add('blog-card')

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div class="tags">${post.tags.map((t) => `<span>#${t}</span>`).join('')}</div>
      <a href="${post.link}">Read More →</a>
    `

    container.appendChild(card)

    // Fade-in animation
    setTimeout(() => {
      card.classList.add('visible')
    }, 100 * index)
  })
}

/* -----------------------------------------
   SEARCH FUNCTIONALITY
----------------------------------------- */

document.getElementById('searchInput').addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase()

  const filtered = projectPosts.filter(
    (post) => post.title.toLowerCase().includes(value) || post.summary.toLowerCase().includes(value)
  )

  renderPosts(filtered)
})

/* -----------------------------------------
   TAG FILTERING
----------------------------------------- */

document.querySelectorAll('.tag-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tag-btn').forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')

    const tag = btn.dataset.tag

    if (tag === 'all') {
      renderPosts(projectPosts)
    } else {
      const filtered = projectPosts.filter((post) => post.tags.includes(tag))
      renderPosts(filtered)
    }
  })
})

/* -----------------------------------------
   INITIAL LOAD
----------------------------------------- */

renderPosts(projectPosts)
