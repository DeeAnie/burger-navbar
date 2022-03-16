let burgerBtn = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});
