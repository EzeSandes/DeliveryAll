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
