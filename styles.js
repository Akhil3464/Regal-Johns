const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on mobile nav link click
document.querySelectorAll("#mobile-menu .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Scrollspy: Highlight active link
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// AOS animation
AOS.init();

// Fix scroll position on reload if URL contains a hash
window.addEventListener("load", () => {
  // Always go to #home section
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    // Remove hash from URL without refreshing
    history.replaceState(null, null, window.location.pathname);

    // Scroll to #home with offset for fixed header
    setTimeout(() => {
      const offset = 128; // Adjust based on header height
      const top = homeSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  }
});
