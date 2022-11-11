const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const navItems = document.getElementById("nav-items");
const navDropdown = document.querySelector("nav .container ul");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  navItems.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  navItems.style.display = "none";
});

const navMenuItems = navDropdown.querySelectorAll("li");

const changeActiveItems = () => {
  navMenuItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navMenuItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItems();
    link.classList.add("active");
  });
});

const readMore = document.querySelector(".read-more-content");
const readMoreBtn = document.querySelector(".read-more");

readMoreBtn.addEventListener("click", () => {
  readMore.classList.toggle("show-content");
  if (readMore.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show less";
  } else {
    readMoreBtn.textContent = "Show more";
  }
});

const skillsItems = document.querySelectorAll("section.skills .skill");

skillsItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle("show-items");
  });
});

// box shadow on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("show-box-shadow", window.scrollY > 0);
});
