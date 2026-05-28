function enterPortfolio() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("portfolio").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  revealElements();
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}