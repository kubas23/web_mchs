<?php
$conn = new mysqli("mysql.topweby.cz", "mchselektr2", "h73nofh43w", "mchselektr2");
if ($conn->connect_error) {
    die("Chyba připojení: " . $conn->connect_error);
}

$username = 'miloslav';
$password = password_hash('Xaver1', PASSWORD_DEFAULT);

$query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if ($conn->query($query) === TRUE) {
    echo "Uživatel přidán.";
} else {
    echo "Chyba: " . $conn->error;
}

$conn->close();
?>
