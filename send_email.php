<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if(empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Please fill in all fields correctly.";
        exit;
    }

    $to = "speedlinecommunication02@gmail.com"; // Your email
    $subject = "New Contact Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Try again later.";
    }
} else {
    echo "Invalid request.";
}
?>