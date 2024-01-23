const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currbtn = document.querySelectorAll(".active-btn");
      currbtn[0].className = currbtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  // Sections active class
  allSection.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  // Toggle theme
  const themebtn = document.querySelector(".theme-btn");
  const element = document.body;

  // Check if theme is stored in local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    element.classList.add(savedTheme);
  }

  themebtn.addEventListener("click", function () {
    // Toggle the 'light-mode' class
    element.classList.toggle("light-mode");

    // Check if 'light-mode' class is present and save the theme to local storage
    if (element.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  });
}

PageTransitions();

//Auto type
document.addEventListener("DOMContentLoaded", function () {
  const typedTextElement = document.getElementById("typed-text");

  const options = {
    strings: [
      "I am a Software Developer",
      "Turning coffee into code is my hobby",
      "'404 SLEEP NOT FOUND'",
    ],
    typeSpeed: 60,
    backSpeed: 65,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  };

  const typed = new Typed(typedTextElement, options);
});

window.addEventListener("scroll", () => {
  const hiddenContent = document.querySelector(".right-about");
  const container = document.querySelector(".communicate");
  const containHeight = container.clientHeight;
  const scrollY = window.scrollY;

  if (scrollY >= containHeight) {
    hiddenContent.style.opacity = 1;
    hiddenContent.style.transform = "translateX(0)";
  }

  const aboutContent = document.querySelector(".about-stats");
  const containerA = document.querySelector(".right-about");
  const containAHeight = containerA.clientHeight;
  const scrollAY = window.scrollY;

  if (scrollAY >= containAHeight) {
    aboutContent.style.opacity = 1;
    aboutContent.style.transform = "translateY(0)";
  }
});
