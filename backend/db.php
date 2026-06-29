<?php
// db.php - Database Configuration & Security Handlers

// 1. Allow your React frontend (running on port 5173) to securely access this PHP backend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// 2. Handle browser security preflight checks
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. Database Credentials
$host = "localhost";
$db_name = "barangayadmin_db";
$username = "root";       // Default XAMPP username
$password = "";           // Default XAMPP password is empty
$conn = null;

// 4. Establish Connection via PDO
try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    // Enable error reporting to help you debug errors during your thesis development
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $exception) {
    echo json_encode([
        "status" => "error", 
        "message" => "Database connection failed: " . $exception->getMessage()
    ]);
    exit();
}
?>