<meta charset="utf-8">
<?php
    use PHPMailer\PHPMailer\PHPMailer;

		// Decode
        $encodedBody = $_GET['ebody'];
		$decodedBody = base64_decode(base64_decode(str_rot13($encodedBody)));
		parse_str($decodedBody, $decodedVar);
		
		//GET variable
        $name = $decodedVar['name'];
        $email = $decodedVar['email'];
        $contactNum = $decodedVar['contactNum'];
        $body = $decodedVar['body'];
        $reasons = $decodedVar['reasons'];
        $jobTitle = $decodedVar['jobTitle'];
        $fileLocation = $decodedVar['fileLocation'];

		//PHPMailer Start
        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";

        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "ezytronicsdnbhd.2022@gmail.com";
        $mail->Password = 'bpvypnnthutatpkr';
        $mail->Port = 465; //587
        $mail->SMTPSecure = "ssl"; //tls

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom('noreply@ezytronic.com.my','Ezytronic Sdn Bhd');
        $mail->addAddress('sales@ezytronic.com','Ezytronic Sdn Bhd');
        $mail->Subject = 'Inquiry Form - by '.$name;
        $mail->Body = 'An inquiry was submitted by this user:<br><br>';
		$mail->Body .= '<strong>Name:</strong>&nbsp;' . $name . '<br>';
		$mail->Body .= '<strong>Email:</strong>&nbsp;' . $email . '<br>';
		$mail->Body .= '<strong>Contact number:</strong>&nbsp;' . $contactNum . '<br>';
		$mail->Body .= '<strong>Reason in contacting us:</strong>&nbsp;' . $reasons . '<br>';

		// Include 'Inquiry' section only if not empty
		if (!empty($body)) {
			$mail->Body .= '<strong>Inquiry:</strong>&nbsp;' . $body . '<br>';
		}

		// Include 'Applying for Job' section only if not empty
		if (!empty($jobTitle)) {
			$mail->Body .= '<strong>Applying for Job:</strong>&nbsp;' . $jobTitle;
		}

        // Attach file if provided
		if (!empty($fileLocation) && file_exists($fileLocation)) {
			$mail->addAttachment($fileLocation, basename($fileLocation));
		}
		
		$mail->SMTPOptions = [
			'ssl' => [
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true,
			]
		];

        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
            @unlink($fileLocation);
			header("Location: https://ezytronic.com.my/message-sent-successful");
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
            @unlink($fileLocation);
                       header("Location: https://ezytronic.com.my/something-wrong");
        }

        exit(json_encode(array("status" => $status, "response" => $response)));
?>
