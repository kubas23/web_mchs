document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".cookie-modal");
  const acceptBtn = document.querySelector(".cookie-accept");
  const rejectBtn = document.querySelector(".cookie-reject");

  if (!localStorage.getItem("cookiesConsent")) {
    modal.classList.add("active");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesConsent", "accepted");
    modal.classList.remove("active");

    // Načti GA jen při přijetí cookies
    let gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PYG1G1H3KH';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PYG1G1H3KH');
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesConsent", "rejected");
    modal.classList.remove("active");
  });
});
