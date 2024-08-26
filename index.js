const buttonElement = document.getElementById("up");

buttonElement.addEventListener("click", function(){
  window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    buttonElement.classList.add("block")
    buttonElement.classList.remove("hidden")
  } else {
    buttonElement.classList.add("hidden")
    buttonElement.classList.remove("block")
  }
});

const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".navigation-menu")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("fixed")
    mobileMenu.classList.toggle("top-14")
    mobileMenu.classList.toggle("bg-transparent")

  })

