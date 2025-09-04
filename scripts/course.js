// Course data
const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { code: "WDD231", name: "Front-End Web Development I", credits: 2, completed: false },
    { code: "CSE110", name: "Introduction to Programming", credits: 2, completed: true },
    { code: "CSE210", name: "Programming with Classes", credits: 2, completed: false }
  ];
  
  // Render courses
  function renderCourses(filter = "all") {
    const container = document.getElementById("course-cards");
    container.innerHTML = "";
  
    let filtered = courses;
    if (filter === "wdd") filtered = courses.filter(c => c.code.startsWith("WDD"));
    if (filter === "cse") filtered = courses.filter(c => c.code.startsWith("CSE"));
  
    filtered.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      if (course.completed) card.classList.add("completed");
      card.textContent = `${course.code} - ${course.name}`;
      container.appendChild(card);
    });
  
    const total = filtered.reduce((sum, c) => sum + c.credits, 0);
    document.getElementById("total-credits").textContent =
      `The total credits for course listed above is ${total}`;
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("all-courses").addEventListener("click", () => renderCourses("all"));
    document.getElementById("cse-courses").addEventListener("click", () => renderCourses("cse"));
    document.getElementById("wdd-courses").addEventListener("click", () => renderCourses("wdd"));
    renderCourses();
  });
  