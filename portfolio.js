/* -----------------------------------------
   PORTFOLIO INTERACTIONS
   - Category switching
   - Tag filtering
   - Live search
----------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('project-container')
  const searchInput = document.getElementById('searchInput')
  const tabButtons = document.querySelectorAll('.tab-btn')

  // Default category
  let activeCategory = 'web'
  let activeTag = null

  /* -----------------------------------------
     GET PROJECT LIST BY CATEGORY
  ----------------------------------------- */
  function getProjects() {
    if (activeCategory === 'web') return webProjects
    if (activeCategory === 'data') return dataProjects
    return [] // GenAI placeholder
  }

  /* -----------------------------------------
     RENDER PROJECT CARDS
  ----------------------------------------- */
  function renderProjects() {
    const projects = getProjects()
    const searchTerm = searchInput.value.toLowerCase()

    container.innerHTML = ''

    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm) ||
        project.summary.toLowerCase().includes(searchTerm) ||
        project.tag.some((t) => t.toLowerCase().includes(searchTerm))

      const matchesTag = activeTag ? project.tag.includes(activeTag) : true

      return matchesSearch && matchesTag
    })

    filtered.forEach((project, index) => {
      const card = document.createElement('div')
      card.classList.add('project-card')

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        <div class="tag-row">
          ${project.tag.map((t) => `<span class="tag" data-tag="${t}">${t}</span>`).join('')}
        </div>

        <div class="project-links">
          <a href="${project.live}" target="_blank">Live Demo</a>
          <a href="${project.github}" target="_blank">GitHub</a>
          <a href="${project.page}">Case Study</a>
        </div>
      `

      container.appendChild(card)

      // Fade-in animation
      setTimeout(() => {
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, 80 * index)
    })

    attachTagListeners()
  }

  /* -----------------------------------------
     TAG FILTERING
  ----------------------------------------- */
  function attachTagListeners() {
    const tags = document.querySelectorAll('.tag')

    tags.forEach((tag) => {
      tag.addEventListener('click', () => {
        const selected = tag.dataset.tag

        // Toggle tag filter
        activeTag = activeTag === selected ? null : selected

        // Highlight active tag
        tags.forEach((t) => t.classList.remove('active-tag'))
        if (activeTag) {
          document
            .querySelectorAll(`[data-tag="${activeTag}"]`)
            .forEach((t) => t.classList.add('active-tag'))
        }

        renderProjects()
      })
    })
  }

  /* -----------------------------------------
     CATEGORY SWITCHING
  ----------------------------------------- */
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')

      activeCategory = btn.dataset.category
      activeTag = null
      searchInput.value = ''

      renderProjects()
    })
  })

  /* -----------------------------------------
     LIVE SEARCH
  ----------------------------------------- */
  searchInput.addEventListener('input', () => {
    renderProjects()
  })

  /* -----------------------------------------
     INITIAL LOAD
  ----------------------------------------- */
  renderProjects()
})
