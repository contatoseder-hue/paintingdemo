// ===============================
// PAGE LOAD FADE-IN + PRELOADER
// ===============================
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll("section, .post, .feature, .hero-content");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// Set initial hidden state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// NAVBAR SHRINK ON SCROLL
// ===============================
const navbar = document.querySelector(".topbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.padding = "5px 20px";
    navbar.style.backgroundColor = "#222";
    navbar.style.transition = "all 0.3s ease";
  } else {
    navbar.style.padding = "15px 20px";
    navbar.style.backgroundColor = "#333";
  }
});


// ===============================
// BUTTON HOVER ANIMATION BOOST
// ===============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.2s ease";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
















const images = document.querySelectorAll(".hero-image img, .feature-image img, .post img");
images.forEach((img, index) => {
  setTimeout(() => img.classList.add("visible"), 300 + 200 * index);
});
