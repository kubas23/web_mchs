document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('loginMessage');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;
  
      // Jednoduché porovnání
      if (username === 'miloslav' && password === 'Xaver1') {
        message.textContent = 'Přihlášení proběhlo úspěšně!';
        message.style.color = 'lightgreen';
  
        // Přesměrování nebo další akce
        setTimeout(() => {
          window.location.href = 'admin.html';
        });
      } else {
        message.textContent = 'Špatné jméno nebo heslo.';
        message.style.color = 'red';
      }
    });
  });