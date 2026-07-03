document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const navMenu = document.getElementById("navMenu");

const logo = document.getElementById("logoScrollTop");
// smooth scaling transitions
logo.style.transition = 'transform 300ms ease';
logo.style.willChange = 'transform';
logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

logo.addEventListener("mouseover", () => {
  animateLogoScaleUp();
});

logo.addEventListener("mouseout", () => {
  animateLogoScaleDown();
});

function animateLogoScaleUp() {
  logo.style.transform = 'scale(1.1)';
}

function animateLogoScaleDown() {
  logo.style.transform = 'scale(1)';
}

function openMenu() {
  navMenu.classList.add("active");
  menuToggle.classList.add("is-hidden");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("is-hidden");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// Close the dropdown after tapping a nav link
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMenu();
  }
});
// Scroll reveal: fade elements in on the way down, out on the way up
const revealGroups = document.querySelectorAll(
  '.apps-grid, .skills-grid, .timeline, .stats, .about-grid'
);
revealGroups.forEach((group) => {
  const items = group.querySelectorAll(':scope > .fade-el');
  items.forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${i * 90}ms`);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -10% 0px'
});

document.querySelectorAll('.fade-el').forEach((el) => revealObserver.observe(el));
