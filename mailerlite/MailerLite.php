<?php


class MailerLite
{
    private $email = "";

    public function subscribe ($email) {
        $this->setEmail($email);
        $apiResponse = $this->callSubscribeGroupAPI();
        return $this->returnResponse($apiResponse);
    }

    /**
     * @param  string $email
     */
    private function setEmail ($email) {
        $this->email = $email;
    }

    /**
     * Return response to client side after MailerLite subscription
     * @param  array $apiResponse
     * @return string $responseArr
     */
    private function returnResponse ($apiResponse) {
        header('Content-Type: application/json');

        if (array_key_exists('error', $apiResponse)) {

            // error message obtain from API response.
            $errMessage = $apiResponse['error']['message'];

            $responseArr = [
                'response_code' => 400,
                'response_msg'  => 'Please enter valid email address'
            ];
            return json_encode($responseArr);
        }

        if ($apiResponse['email'] === $this->email) {

            $responseArr = [
                'response_code' => 200,
                'response_msg'  => 'success'
            ];
            return json_encode($responseArr);
        }
    }

    /**
     * Add received email into MailerLite Subscriber's Group
     * @return array $apiResponse
     */
    private function callSubscribeGroupAPI () {
        $curl = curl_init();

        $post_fields = [
            'email' => $this->email
        ];

        $API_URL = "https://api.mailerlite.com/api/v2/groups/61128948/subscribers";

        curl_setopt_array($curl, [
            CURLOPT_URL => $API_URL,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($post_fields),
            CURLOPT_HTTPHEADER => array(
                "content-type: application/json",
                "x-mailerlite-apikey: 50bf625f80a368108840055763378c9c"
            ),
        ]);

        $response = curl_exec($curl);
        curl_close($curl);
        $apiResponse = json_decode($response, true);

        return $apiResponse;

    }
}