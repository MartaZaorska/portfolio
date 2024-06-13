const resizeHandler = () => {
  if (window.innerWidth < 992) {
    window.addEventListener("scroll", UI.mobileScrollAction);
  } else {
    window.removeEventListener("scroll", UI.mobileScrollAction);
    window.addEventListener("scroll", UI.showScrollUpButton);
  }
};

const navbarClickHandler = (e) => {
  const target = e.target.getAttribute("data-target");
  const element = document.querySelector(`.${target}`);
  const top =
    element.getBoundingClientRect().top -
    document.body.getBoundingClientRect().top;
  window.scroll({ left: 0, top, behavior: "smooth" });
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section__box--active");
    }
  });
};

const emailClickHandler = () => {
  navigator.clipboard.writeText("marta.zaorska2@gmail.com").then(() => {
    UI.showMessage("Adres e-mail został skopiowany do schowka");
  });
};
