<?php
// test.php
require_once 'db.php';

echo json_encode([
    "status" => "success",
    "message" => "Your PHP backend successfully connected to barangayadmin_db!",
    "timestamp" => date("Y-m-d H:i:s")
]);
?>