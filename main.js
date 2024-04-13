const OpenBtn = document.getElementById("OpenBtn");
const CloseBtn = document.getElementById("CloseBtn");
const NavMenu = document.getElementById("navMenu");

NavMenu.style.transition = "none";

OpenBtn.onclick = () => {
  NavMenu.removeAttribute("style");
  NavMenu.style.translate = 0;
};

CloseBtn.onclick = () => {
  NavMenu.style.translate = "100vw";

  setTimeout(() => {
    NavMenu.removeAttribute("style") == false;
    NavMenu.style.transition = "none";
  }, 500);
};
