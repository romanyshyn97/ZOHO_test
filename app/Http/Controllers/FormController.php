<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Njoguamos\LaravelZohoOauth\Models\ZohoOauth;

class FormController
{
    final public function submit(Request $request)
    {
        $token = ZohoOauth::latest()->first()?->auth_token;

        $dealData = [
            "data" => [
                "Deal_Name" => $request->dealName,
                "Stage" => $request->stage
            ]
        ];

        $accountData = [
            'Account_Name' => $request->accountName,
            'Website' => $request->website,
            'Phone' => $request->phone
        ];

//        $url = "https://www.zohoapis.com/crm/v2/Deals";
//
//        $ch = curl_init($url);
//
//        // Set cURL options
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//            "Authorization: $token",
//            "Content-Type: application/json"
//        ));
//        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
//        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dealData));
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//
//        // Execute cURL session
//        $response = curl_exec($ch);
//        var_dump($response);die;
//        curl_close($ch);
//        // Check for errors
//        if ($response === false) {
//            $error = curl_error($ch);
//            return ['error'];
//        } else {
//            return $response;
//        }



        $response = Http::withHeaders(['Authorization' => $token])->post("https://www.zohoapis.com/crm/v2/Deals", json_encode($dealData));
        var_dump($response);die;
//
        //DEAL NAME ID 3652397000000002559
        //STAGE 3652397000000002565
        //ACCOUNT NAME 3652397000000002425
        //WEBSITE 3652397000000002607
        //PHONE 3652397000000002601


        //DEALS 3652397000000091023
    }

}
