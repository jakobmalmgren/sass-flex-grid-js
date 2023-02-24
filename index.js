const hamburger_menu = document.querySelector(".burger-menu");
const nav_menu = document.querySelector(".nav-menu");

hamburger_menu.addEventListener("click", function () {
  hamburger_menu.classList.toggle("active");
  nav_menu.classList.toggle("active");
});
document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger_menu.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);
