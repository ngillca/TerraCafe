const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("active");
  hamburgerClose.classList.toggle("active");
  navList.classList.toggle("active");
});

navList.childNodes.forEach((l) => {
  l.addEventListener("click", () => {
    // hamburger.classList.remove("active");
    hamburgerClose.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Scroll animation library
ScrollReveal().reveal(".section-container", {
  easing: "ease-in",
  duration: 800,
  reset: true,
});
