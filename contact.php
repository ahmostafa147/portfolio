<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Customize the email content
    $to = "ahmad_hatem_2004@icloud.com";
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
