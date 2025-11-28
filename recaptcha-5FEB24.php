<meta charset="utf-8">
<?php

if ($_POST['submit']) {
	$name = $_POST['name'];
    $email = $_POST['email'];
    $contactNum = $_POST['contactNum'];
    $body = $_POST['body'];
    $reasons = $_POST['reasons'];
    $jobTitle = $_POST['jobTitle'];
    $token  = $_POST['token'];
    $action = $_POST['action'];

    // Upload attachment file
            //Get the name of the uploaded file
            $filename = $_FILES['myResume']['name'];

            //Choose where to save the uploaded file
            $fileLocation = "attachment/".$filename;

            

            //Save the uploaded file to the server
            if (move_uploaded_file($_FILES['myResume']['tmp_name'],$fileLocation)){
                
            }else{
                echo '<p>File uploading failed.</p>';
            }


    
    $curlData = array(
        'secret' => '6LehcCQeAAAAAOAJ_21fDICXOEKiC7P5lG2L2opj',
        'response' => $token
    );
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($curlData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $curlResponse = curl_exec($ch);
    
    $captchaResponse = json_decode($curlResponse, true);
    
    if ($captchaResponse['success'] == '1' && $captchaResponse['action'] == $action && $captchaResponse['score'] >= 0.5 && $captchaResponse['hostname'] == $_SERVER['SERVER_NAME']) {
        echo 'Form Submitted Successfully';
		$encodeBody = "name=" . $name . "&email=" . $email . "&contactNum=" . $contactNum . "&reasons=" . $reasons . "&body=" . $body .  "&jobTitle=" . $jobTitle . "&fileLocation=" .$fileLocation;
		$encodedBody = str_rot13(base64_encode(base64_encode($encodeBody)));
		header("Location: https://ezytronic.com.my/sendEmail.php/?ebody=" . $encodedBody);
	
    } else {
        echo 'You are not a human';
    	@unlink($fileLocation);
        header("Location: https://ezytronic.com.my/something-wrong");
    }
}
