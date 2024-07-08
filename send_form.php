<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $school = strip_tags(trim($_POST["school"]));
    $city = strip_tags(trim($_POST["city"]));
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($school) || empty($city) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor completa todos los campos.";
        exit;
    }

    $recipient = "mygigs4884@gmail.com";
    $subject = "Nueva solicitud de demo de Convive";

    $email_content = "Nombre: $name\n";
    $email_content .= "Correo Electrónico: $email\n";
    $email_content .= "Nombre de la Escuela: $school\n";
    $email_content .= "Ciudad: $city\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Oops! Algo salió mal y no pudimos enviar tu mensaje.";
    }
} else {
    http_response_code(403);
    echo "Hay un problema con tu envío, inténtalo de nuevo.";
}
?>
