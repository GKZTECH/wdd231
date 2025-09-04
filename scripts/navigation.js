// Toggle navigation for small screens
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu").querySelector("ul");
  
    menuButton.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
  });
  