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

let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  // Najdi všechny obrázky v galerii
  images = document.querySelectorAll(".gallery img");

  // Každému obrázku nastav onclick
  images.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  // Klávesy: ESC a šipky
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
    }
  });
});

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  currentIndex = index;

  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxCaption.innerText = img.alt;

  lightbox.style.display = "flex";
}

function closeLightbox(event) {
  const lightbox = document.getElementById("lightbox");
  if (!event || event.target.id === "lightbox" || event.target.id === "closeBtn") {
    lightbox.style.display = "none";
  }
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  const img = images[currentIndex];
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightboxImg.src = img.src;
  lightboxCaption.innerText = img.alt;
}


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