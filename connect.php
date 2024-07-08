<?php
// Configuration
$db_host = 'localhost'; // Hostname
$db_username = 'root'; // Username
$db_password = ''; // Password
$db_name = 'login page'; // Database name

// Create connection
$conn = mysqli_connect($sname, $unmae, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER == "POST") {
    $mobile = $_POST["mobile no."];
    $otp = $_POST["otp"];

    // Insert data into database
    $sql = "INSERT INTO your_table_name (mobile, otp) VALUES ('$mobile ', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
