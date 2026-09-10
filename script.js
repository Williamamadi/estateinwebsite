// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    navToggle.classList.toggle("nav-toggle-active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-scroll-lock", isOpen);
  });

  // close the menu whenever a nav link is tapped
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      navToggle.classList.remove("nav-toggle-active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-scroll-lock");
    });
  });
}