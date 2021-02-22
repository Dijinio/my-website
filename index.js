// Page Loading
const logo = document.getElementById("logo");
const main = document.getElementById("main");
const navLinksChilds = [...document.querySelector(".nav-links").children];
const home = document.getElementById("home");
const contactLinks = document.getElementById("contact-links");

setTimeout(() => {
  logo.classList.remove("center");
}, 2500);

setTimeout(() => {
  main.classList.remove("hidden");
  navLinksChilds.forEach((link) => {
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
  (entries) => {
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

// Contacts Observer and resize listener
const contactSection = document.getElementById("contact");

let width = window.innerWidth;

window.onresize = () => {
  width = window.innerWidth;

  if (width < 1024) {
    contactLinks.classList.add("footer");
  } else {
    contactLinks.classList.remove("footer");
  }
};

const showContactInfo = new IntersectionObserver(
  (entries) => {
    if (width < 1024) return;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        contactLinks.classList.remove("footer");
      } else {
        contactLinks.classList.add("footer");
      }
    });
  },
  { threshold: 0.9 }
);

showContactInfo.observe(contactSection);

// Navbar responsive menu
const burger = document.getElementById("burger-link");
const navLinks = document.querySelector(".nav-links");

setTimeout(() => {
  burger.classList.remove("hidden");
}, 3000);

burger.addEventListener("click", () => {
  burger.classList.toggle("clicked");
  navLinks.classList.toggle("show");
  main.classList.toggle("blur");
});

main.addEventListener("click", () => {
  burger.classList.remove("clicked");
  navLinks.classList.remove("show");
  main.classList.remove("blur");
});
