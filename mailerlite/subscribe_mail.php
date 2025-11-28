<?php
function redirection(){
    require_once "MailerLite.php";

    $email = $_POST['email'];
    $recaptchaToken = $_POST['recaptcha-token'];
    $secretKey = "6LehcCQeAAAAAOAJ_21fDICXOEKiC7P5lG2L2opj"; // Replace with your reCAPTCHA v3 Secret Key

    // Verify reCAPTCHA token with Google's reCAPTCHA verification endpoint
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptchaToken");
    $responseData = json_decode($response);

    // Check if reCAPTCHA verification was successful
    if ($responseData->success == true && $responseData->action == 'submit') {
        // reCAPTCHA verification succeeded
        $mailerLite = new MailerLite();
        echo $mailerLite->subscribe($email);

        if (strpos($mailerLite->subscribe($email), "200") !== false) {
            echo "CODE 200";
            header('Location: https://ezytronic.com.my/newsletter-successful');
            exit();
        } elseif (strpos($mailerLite->subscribe($email), "400") !== false) {
            echo "CODE 400";
            header("Location: https://ezytronic.com.my/something-wrong");
            exit();
        } else {
            echo "Others";
            header('Location: https://ezytronic.com.my/newsletter-successful');
            exit();
        }
    } else {
        // reCAPTCHA verification failed
        header("Location: https://ezytronic.com.my/recaptcha-failed");
        exit();
    }
}

redirection();
