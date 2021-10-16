/************************************************ */
/****************** SHOW MENU ********************** */
/************************************************ */

function showMenu() {
  const btnMenuEl = document.getElementById("nav-toggle");
  const navMenuEl = document.querySelector(".nav-menu");

  btnMenuEl.addEventListener("click", () => {
    btnMenuEl.querySelectorAll("ion-icon").forEach((icon) => {
      icon.classList.toggle("hidden");
    });

    navMenuEl.classList.toggle("show-menu");
  });
}

showMenu();

/************************************************ */
/****************** SMOOTH SCROLL ********************** */
/************************************************ */

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

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
