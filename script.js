// Automaticky obalí text v navigačních odkazech do <span>
// Spustí se po načtení stránky

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach(link => {
      const text = link.textContent.trim();
      link.innerHTML = `<span>${text}</span>`;
    });
  });

  window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const year = new Date().getFullYear();
      footer.innerHTML = `&copy; ${year} Jakub Staněk | Všechna práva vyhrazena`;
    }
  });