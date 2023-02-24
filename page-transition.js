const links = document.querySelectorAll(".navigation__link-desktop");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location = event.target.href;
    }, 500);
  });
});
