// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

// Weather (OpenWeatherMap API)
const apiKey = "YOUR_API_KEY";
const city = "Accra - Ghana"; // Replace with your chamber city
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  // Current weather
  document.getElementById("current-temp").textContent = Math.round(data.list[0].main.temp);
  document.getElementById("current-desc").textContent = data.list[0].weather[0].description;

  // 3-day forecast
  const forecast = document.getElementById("forecast");
  forecast.innerHTML = "";
  for (let i = 8; i <= 24; i += 8) { 
    const day = data.list[i];
    const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
    forecast.innerHTML += `<p>${date}: ${Math.round(day.main.temp)}°C</p>`;
  }
}
getWeather();


async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const members = await res.json();

 
  const featured = members.filter(m => m.membership === 2 || m.membership === 3);

  
  const count = Math.floor(Math.random() * 2) + 2;
  const chosen = [];
  while (chosen.length < count) {
    const rand = featured[Math.floor(Math.random() * featured.length)];
    if (!chosen.includes(rand)) chosen.push(rand);
  }

  const container = document.getElementById("spotlight-container");
  container.innerHTML = "";
  chosen.forEach(m => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${m.image}" alt="${m.name} logo">
      <h3>${m.name}</h3>
      <p>${m.phone}</p>
      <p>${m.address}</p>
      <p>Level: ${m.membership}</p>
    `;
    container.appendChild(card);
  });
}
loadSpotlights();
