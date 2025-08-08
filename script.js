const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  // Toggle both classes for desktop and mobile
  sidebar.classList.toggle("closed");
  sidebar.classList.toggle("open");
});
