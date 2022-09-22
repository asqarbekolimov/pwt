window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-icon"),
    navbar = document.querySelector(".navbar"),
    navItems = document.querySelectorAll(".navbar a");

  menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });
  const scrollBtn = document.querySelector(".top");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  let reveal = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveal.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveal[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.add("active");
      }
    }
  });
});
