// basic footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// mobile menu toggle (shared behavior)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
}

// show visit message using localStorage
(function handleVisitMessage() {
  const key = "chamber_last_visit";
  const now = Date.now();
  const last = localStorage.getItem(key);
  const out = document.getElementById("visit-msg");

  if (!last) {
    out.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const diffMs = now - Number(last);
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffMs < 24 * 60 * 60 * 1000) {
      out.textContent = "Back so soon! Awesome!";
    } else {
      out.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
  }

  // store current visit time
  localStorage.setItem(key, String(now));
})();

// load discover items and render grid cards
async function loadDiscover() {
  try {
    const res = await fetch("data/discover.json");
    const items = await res.json();
    const container = document.getElementById("discover-grid");
    container.innerHTML = "";

    items.forEach((it, index) => {
      const n = index + 1;
      const card = document.createElement("article");
      card.className = `card item${n}`;
      card.setAttribute("role", "listitem");
      card.innerHTML = `
        <figure>
          <img src="images/${it.image}" alt="${it.name}">
        </figure>
        <div class="card-body">
          <h2>${it.name}</h2>
          <address>${it.address}</address>
          <p>${it.description}</p>
          <a class="btn" href="#" aria-label="Learn more about ${it.name}">learn more</a>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load discover data", err);
    const container = document.getElementById("discover-grid");
    container.innerHTML = "<p>Failed to load content.</p>";
  }
}

loadDiscover();
