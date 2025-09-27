 // Get URL parameters and display user data
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById('display-firstName').textContent = urlParams.get('firstName') || 'Not provided';
    document.getElementById('display-lastName').textContent = urlParams.get('lastName') || 'Not provided';
    document.getElementById('display-email').textContent = urlParams.get('email') || 'Not provided';
    document.getElementById('display-phone').textContent = urlParams.get('phone') || 'Not provided';
    document.getElementById('display-businessName').textContent = urlParams.get('businessName') || 'Not provided';
    
    const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

    const timestamp = urlParams.get('timestamp');
    if (timestamp) {
      const date = new Date(timestamp);
      document.getElementById('display-timestamp').textContent = date.toLocaleString();
    }
    
    // Update footer year and last modified
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;