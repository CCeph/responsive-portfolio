import "./style.css";

function bindTitleButtonToScroll() {
  const titleButton = document.querySelector("[data-title-button]");
  titleButton.addEventListener("click", () => {
    document.querySelector(".about-me").scrollIntoView();
  });
}

bindTitleButtonToScroll();
