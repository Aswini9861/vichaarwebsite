// process_form.php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_STRING);
    $lastName = filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $mobileNumber = filter_input(INPUT_POST, 'mobileNumber', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($firstName && $lastName && $email && $mobileNumber) {
        $to = 'info@vichaarlab.com';
        $subject = 'New Message From Website';
        $emailMessage = "First Name: $firstName\n";
        $emailMessage .= "Last Name: $lastName\n";
        $emailMessage .= "Email: $email\n";
        $emailMessage .= "Mobile Number: $mobileNumber\n";
        $emailMessage .= "Message: $message\n";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $emailMessage, $headers)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error']);
        }
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo "Invalid request method.";
}
?>
