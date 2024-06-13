document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const emailElement = document.getElementById("email");
  const scrollUpButton = document.querySelector(".scroll__button");
  const navbarItems = document.querySelectorAll(".navbar__item");

  // IntersectionObserver
  const createObserver = () => {
    const sectionBoxes = document.querySelectorAll(".section__box");
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "isIntersecting" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(observerCallback, {
        threshold: 0.4,
      });
      sectionBoxes.forEach((sectionBox) => observer.observe(sectionBox));
    } else {
      sectionBoxes.forEach((sectionBox) =>
        sectionBox.classList.add("section__box--active")
      );
    }
  };

  // events handlers
  window.addEventListener("resize", resizeHandler);

  navbarItems.forEach((navbarItem) =>
    navbarItem.addEventListener("click", navbarClickHandler)
  );

  emailElement.addEventListener("click", emailClickHandler);

  scrollUpButton.addEventListener("click", UI.scrollUp);

  // servicer worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then((reg) => console.log("Service Worker: Registered"))
        .catch((err) => console.log("Service Worker: Error"));
    });
  }

  // initial function
  async function init(){
    await UI.displayData();
    await createObserver();
    resizeHandler();
  };

  init();
});
