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

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".navigation-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("fixed");
  mobileMenu.classList.toggle("top-14");
  mobileMenu.classList.toggle("bg-black");
});

function closeNavigationMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("fixed", "top-14", "bg-transparent");
}

// Adiciona evento de clique a todos os links do menu
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavigationMenu();
  });
});

// Adiciona evento de clique ao documento para fechar o menu ao clicar fora
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    closeNavigationMenu();
  }
});
