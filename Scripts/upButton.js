const buttonElement = document.getElementById("up");

buttonElement.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    buttonElement.classList.add("block");
    buttonElement.classList.remove("hidden");
  } else {
    buttonElement.classList.add("hidden");
    buttonElement.classList.remove("block");
  }
});