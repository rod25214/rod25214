document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const updateNav = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Revela os elementos conforme entram na área visível da tela.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // Fecha o menu mobile depois que um link é selecionado.
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu?.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
