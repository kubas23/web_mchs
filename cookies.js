document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".cookie-modal");
    const acceptBtn = document.querySelector(".cookie-accept");
    const rejectBtn = document.querySelector(".cookie-reject");
  
    // Pokud ještě uživatel nevybral možnost, zobraz modal
    if (!localStorage.getItem("cookiesConsent")) {
      modal.classList.add("active");
    }
  
    // Uživatel přijal cookies
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesConsent", "accepted");
      modal.classList.remove("active");
    });
  
    // Uživatel odmítl cookies
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesConsent", "rejected");
      modal.classList.remove("active");
    });
  });