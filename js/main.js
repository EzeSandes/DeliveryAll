/************************************************ */
/****************** SHOW MENU ********************** */
/************************************************ */
const btnMenuEl = document.getElementById("nav-toggle");
const navMenuEl = document.querySelector(".nav-menu");

function toggleMenuIcons() {
  btnMenuEl.querySelectorAll("ion-icon").forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}

function showMenu() {
  // 1 - Change Icons
  btnMenuEl.addEventListener("click", () => {
    toggleMenuIcons();
    navMenuEl.classList.toggle("show-menu");
  });

  // 2 - Display Menu
  navMenuEl.addEventListener("click", function (e) {
    if (
      navMenuEl.classList.contains("show-menu") &&
      (e.target.classList.contains("nav-item") ||
        e.target.classList.contains("btn"))
    ) {
      navMenuEl.classList.toggle("show-menu");
      toggleMenuIcons();
    }
  });
}

showMenu();

/************************************************ */
/****************** SMOOTH SCROLL ********************** */
/************************************************ */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
