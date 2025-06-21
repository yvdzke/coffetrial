//  toggle class active
const yudanav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu");
onclick = () => {
  yudanav.classList.toggle("active");
};

const hamburger = document.querySelectorAll("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !yudanav.contains(e.target)) {
    yudanav.classList.remove("active");
  }
});
