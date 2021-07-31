/** @format */

const iconMenu = document.getElementById("HamburgerMenu");

const ToggleMenu = () => {
  const x = document.getElementById("TopNav");
  if (x.className === "main_nav") {
    x.className =" responsive";
  } else {
    x.className = "main_nav";
  }
};
iconMenu.addEventListener("click", ToggleMenu);
