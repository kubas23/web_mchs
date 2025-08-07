// Automaticky obalí text v navigačních odkazech do <span>
// Spustí se po načtení stránky

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
      const hamburger = document.getElementById("hamburger");
  const navbarWrapper = document.getElementById("navbar-wrapper");

  hamburger.addEventListener("click", function () {
    navbarWrapper.classList.toggle("open");
  });
  
    navLinks.forEach(link => {
      const text = link.textContent.trim();
      link.innerHTML = `<span>${text}</span>`;
    });
  });

  window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
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

  const swiper = new Swiper('.about-slider', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });  