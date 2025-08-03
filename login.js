const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Přihlášení proběhlo úspěšně");
            window.location.href = "admin.html";
        } else {
            alert(data.error || "Přihlášení selhalo");
        }
    })
    .catch(err => {
        console.error("Chyba:", err);
        alert("Došlo k chybě");
    });
});
