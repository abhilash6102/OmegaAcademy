let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let container = document.getElementById("container");
let login_box = document.querySelector(".login-box");
let signup_box = document.querySelector(".signup-box");
signup.addEventListener("click", () => {
  login_box.style.display = "none";
  signup_box.style.display = "block";
});
signin.addEventListener("click", () => {
  login_box.style.display = "block";
  signup_box.style.display = "none";
});

const joinnow = document.querySelectorAll(".btn1");
let color = document.getElementById("color");
let login1 = document.getElementById("login1");
let register = document.getElementById("register");
let remove_symbol = document.querySelector(".remove");
let r1 = document.querySelector(".r1");
joinnow.forEach((button) => {
  button.addEventListener("click", (event) => {
    container.classList.toggle("visible");
    color.style.display = "block";
    container.style.zIndex = "9999";
    login_box.style.display = "block";
    signup_box.style.display = "none";
    event.stopPropagation();
  });
});
login1.addEventListener("click", (event) => {
  container.classList.toggle("visible");
  color.style.display = "block";
  container.style.zIndex = "9999";
  login_box.style.display = "block";
  signup_box.style.display = "none";
  event.stopPropagation();
});
register.addEventListener("click", (event) => {
  container.classList.toggle("visible");
  color.style.display = "block";
  container.style.zIndex = "9999";
  login_box.style.display = "none";
  signup_box.style.display = "block";
  event.stopPropagation();
});
remove_symbol.addEventListener("click", () => {
  login_box.style.display = "none";
  signup_box.style.display = "none";
  container.classList.remove("visible");
  color.style.display = "none";
});
r1.addEventListener("click", () => {
  login_box.style.display = "none";
  signup_box.style.display = "none";
  container.classList.remove("visible");
  color.style.display = "none";
});
color.addEventListener("click", () => {
  container.classList.remove("visible");
  color.style.display = "none";
});
container.addEventListener("click", (event) => {
  event.stopPropagation();
});

// nav shadow
const navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight * 0.2) {
    navbar.classList.add("nav-box-shadow");
  } else {
    navbar.classList.remove("nav-box-shadow");
  }
});

// side menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("menu");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  function toggleMenu() {
    sideMenu.classList.toggle("open");
  }

  function closeMenu(event) {
    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
      sideMenu.classList.remove("open");
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", () => sideMenu.classList.remove("open"));
  window.addEventListener("click", closeMenu);
});

// move to the top
const scrollBtn = document.getElementById("scrollBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// loader animation
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("splitContainer").classList.add("reveal");
  setTimeout(() => {
    document.getElementById("mainContent").classList.add("show-content");
    document.getElementById("animate-loader").style.display = "none";
  }, 800);
}, 2000);

// Carousel effect for team
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".instructor");
function moveCarousel() {
  if (!carousel || items.length === 0) return;
  const totalWidth = items[0].offsetWidth + 20;
  carousel.style.transition = "transform 1s ease-in-out";
  carousel.style.transform = `translateX(-${totalWidth}px)`;
  carousel.addEventListener(
    "transitionend",
    () => {
      carousel.style.transition = "none";
      const firstItem = carousel.children[0];
      carousel.appendChild(firstItem);
      carousel.style.transform = "translateX(0)";
    },
    { once: true }
  );
}
setInterval(moveCarousel, 6000);

// Carousel effect for testimonials
const carousel2 = document.querySelector(".carousel2");
const profiles = document.querySelectorAll(".profile");
function moveCarousel2() {
  if (!carousel2 || profiles.length === 0) return;
  const totalWidth2 = profiles[0].offsetWidth + 20;
  carousel2.style.transition = "transform 1s ease-in-out";
  carousel2.style.transform = `translateX(-${totalWidth2}px)`;
  carousel2.addEventListener(
    "transitionend",
    () => {
      carousel2.style.transition = "none";
      const firstProfile = carousel2.children[0];
      carousel2.appendChild(firstProfile);
      carousel2.style.transform = "translateX(0)";
    },
    { once: true }
  );
}
setInterval(moveCarousel2, 6000);

// Course Category Tabs (Popular Courses)
const courseCategoryButtons = document.querySelectorAll(".tab-button");
const courseCategoryTabs = document.querySelectorAll(".popular-courses");

courseCategoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    courseCategoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    courseCategoryTabs.forEach((tab) => {
      tab.classList.add("hidden");
    });

    const target = document.getElementById(btn.dataset.category);
    if (target) {
      target.classList.remove("hidden");
    }
  });
});

// Course Details
const detailTabs = document.querySelectorAll(".tab");
const detailSections = document.querySelectorAll(".section");

detailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    detailTabs.forEach((t) => t.classList.remove("active"));
    detailSections.forEach((sec) => sec.classList.remove("active"));
    tab.classList.add("active");
    const section = document.getElementById(tab.dataset.target);
    if (section) {
      section.classList.add("active");
    }
  });
});

function toggleSubTopic(el) {
  const subTopic = el.querySelector(".sub-topic");
  if (subTopic) {
    subTopic.classList.toggle("show");
  }
}
function toggleAccordion(mainTopicEl) {
  const wrapper = mainTopicEl.nextElementSibling;
  const icon = mainTopicEl.querySelector(".toggle-icon");
  const isOpen = wrapper.classList.contains("show");

  // Close all others
  document
    .querySelectorAll(".sub-topic-wrapper")
    .forEach((el) => el.classList.remove("show"));
  document
    .querySelectorAll(".toggle-icon")
    .forEach((i) => (i.textContent = "+"));
  document
    .querySelectorAll(".main-topic")
    .forEach((el) => el.classList.remove("active"));

  // Toggle current
  if (!isOpen) {
    wrapper.classList.add("show");
    icon.textContent = "–";
    mainTopicEl.classList.add("active"); // mark as active
  }
}

function toggleFaqAnswer(element) {
  const wrapper = element.nextElementSibling;
  const icon = element.querySelector(".faq-toggle-icon");
  const isOpen = wrapper.classList.contains("show");
  // Close all open FAQs
  document.querySelectorAll(".faq-answer-wrapper").forEach((el) => {
    el.classList.remove("show");
  });

  document.querySelectorAll(".faq-toggle-icon").forEach((i) => {
    i.textContent = "+";
  });

  document.querySelectorAll(".faq-question").forEach((el) => {
    el.classList.remove("active");
  });

  // Open the clicked one
  if (!isOpen) {
    wrapper.classList.add("show");
    icon.textContent = "–";
    element.classList.add("active");
  }
}
