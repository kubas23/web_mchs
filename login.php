<?php
header("Content-Type: application/json");

// Připojení k DB
$conn = new mysqli("mysql.topweby.cz", "mchselektr2", "h73nofh43w", "mchselektr2");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Chyba připojení k databázi"]);
    exit;
}

// Získání vstupů
$data = json_decode(file_get_contents("php://input"), true);
$username = $conn->real_escape_string($data['username']);
$password = $data['password'];

// Najdi uživatele
$query = "SELECT password FROM users WHERE username = '$username'";
$result = $conn->query($query);

if ($result && $result->num_rows === 1) {
    $row = $result->fetch_assoc();
    
    if (password_verify($password, $row['password'])) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Neplatné heslo"]);
    }
} else {
    http_response_code(401);
    echo json_encode(["error" => "Uživatel nenalezen"]);
}
$conn->close();
?>
