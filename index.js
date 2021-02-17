// Page Loading
const logo = document.getElementById("logo");
const main = document.getElementById("main");
const navLinks = [...document.querySelector(".nav-links").children];
const home = document.getElementById("home");
const contactLinks = document.getElementById("contact-links");

setTimeout(() => {
  logo.classList.remove("center");
}, 2500);

setTimeout(() => {
  main.classList.remove("hidden");
  navLinks.forEach((link) => {
    link.classList.remove("hidden");
  });
}, 3000);

setTimeout(() => {
  home.classList.remove("hidden");
}, 3500);

setTimeout(() => {
  contactLinks.classList.remove("hidden");
}, 4000);

// Fade in Observer
const fadeIns = [...document.getElementsByClassName("fade-in")];
const obsOptions = { rootMargin: "0px 0px -200px 0px" };

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("fade-in");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, obsOptions);

fadeIns.forEach((tag) => {
  appearOnScroll.observe(tag);
});

// Navbar Observer
const navbar = document.getElementById("navbar");
const homeSection = document.getElementById("home");

const fixNav = new IntersectionObserver(
  (entries, fixNav) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || main.classList.contains("hidden")) {
        navbar.classList.remove("scroll");
      } else {
        navbar.classList.add("scroll");
      }
    });
  },
  { threshold: 0.8 }
);

fixNav.observe(homeSection);
