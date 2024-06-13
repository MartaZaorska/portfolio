class UI {
  static scrollUp() {
    window.scroll({ left: 0, top: 0, behavior: "smooth" });
  }

  static showMessage(message) {
    const messageElement = document.querySelector(".message");
    messageElement.innerText = message;
    messageElement.classList.add("message--active");
    setTimeout(() => messageElement.classList.remove("message--active"), 3000);
  }

  static displayData() {
    document.getElementById("year").innerText = new Date().getFullYear();
    UI.displaySkills();
    UI.displayProjects();
    UI.startHeaderAnimation();
  }

  static displaySkills() {
    const skillsContent = document.querySelector(".skills__content");
    skillsContent.innerHTML = "";
    SKILLS.forEach((skill) => {
      skillsContent.innerHTML += `
        <section class="section__box">${skill}</section>
      `;
    });
  }

  static displayProjects() {
    const projectsContent = document.querySelector(".projects__content");
    projectsContent.innerHTML = "";

    PROJECTS.forEach((project) => {
      const technologiesText = project.technologies.reduce(
        (prev, curr, index, arr) => {
          return index === arr.length - 1
            ? `${prev} ${curr}`
            : `${prev} ${curr} |`;
        },
        ""
      );

      projectsContent.innerHTML += `
        <section class="section__box">
          <h2 class="project__title">${project.name}</h2>
          <h4 class="project__subtitle">${technologiesText}</h4>
          <section class="project__controls">
            <a rel="noopener noreferrer" href="${project.demo_url}"  target="_blank" class="project__link"><i class="far fa-eye"></i> Podgląd</a>
            <a rel="noopener noreferrer" href="${project.github_url}"  target="_blank" class="project__link"><i class="fab fa-github"></i> Github</a>
          </section>
        </section>
      `;
    });
  }

  static startHeaderAnimation() {
    const typeElement = document.querySelector(".type");
    const words = JSON.parse(typeElement.getAttribute("data-words"));
    new TypeText(words, typeElement);
  }

  static showScrollUpButton() {
    const scrollUpButton = document.querySelector(".scroll__button");
    window.pageYOffset > 360
      ? scrollUpButton.classList.add("scroll__button--active")
      : scrollUpButton.classList.remove("scroll__button--active");
  }

  static mobileScrollAction() {
    const titleElements = document.querySelectorAll(".section__title");

    UI.showScrollUpButton();

    titleElements.forEach((titleElement) => {
      if (!titleElement.hasAttribute("data-fixed")) {
        if (titleElement.getBoundingClientRect().top < 10) {
          titleElement.setAttribute("data-offset", `${window.pageYOffset}`);
          titleElement.setAttribute("data-fixed", "true");
          titleElement.classList.add("section__title--fixed");
        }
      } else {
        const titleYOffset = parseFloat(
          titleElement.getAttribute("data-offset")
        );
        if (window.pageYOffset <= titleYOffset) {
          titleElement.removeAttribute("data-fixed");
          titleElement.classList.remove("section__title--fixed");
        }
      }
    });
  }
}
