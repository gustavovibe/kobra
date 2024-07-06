<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $negocio = $_POST["negocio"];
    $hiddenInput = $_POST["hiddenInput"];

    $to = "gustavomenchaca.cecyt2@gmail.com";
    $subject = "Kobra Cotizacion";
    $message = "Nombre: $name\nEmail: $email\nTel: $phone\nOpciones: $hiddenInput\nNegocio: $negocio";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
