/* -----------------------------------------
   BLOG POST DATA
----------------------------------------- */

const blogPosts = [
  {
    title: "Why I Built a Cinematic Portfolio",
    summary: "A deep dive into the design philosophy behind my Midnight Journal aesthetic.",
    tags: ["WebDev", "UIUX"],
    link: "blog/post-1.html"
  },
  {
    title: "From Data to Storytelling",
    summary: "How data analytics shaped my approach to building meaningful digital experiences.",
    tags: ["DataScience", "PersonalGrowth"],
    link: "blog/post-2.html"
  }
];

/* -----------------------------------------
   RENDER BLOG POSTS
----------------------------------------- */

function renderPosts(posts) {
  const container = document.getElementById("blogContainer");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div class="tags">${post.tags.map(t => `<span>#${t}</span>`).join("")}</div>
      <a href="${post.link}">Read More →</a>
    `;

    container.appendChild(card);

    // Fade-in animation
    setTimeout(() => {
      card.classList.add("visible");
    }, 100 * index);
  });
}

/* -----------------------------------------
   SEARCH FUNCTIONALITY
----------------------------------------- */

document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = blogPosts.filter(post =>
    post.title.toLowerCase().includes(value) ||
    post.summary.toLowerCase().includes(value)
  );

  renderPosts(filtered);
});

/* -----------------------------------------
   TAG FILTERING
----------------------------------------- */

document.querySelectorAll(".tag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.dataset.tag;

    if (tag === "all") {
      renderPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.tags.includes(tag));
      renderPosts(filtered);
    }
  });
});

/* -----------------------------------------
   INITIAL LOAD
----------------------------------------- */

renderPosts(blogPosts);