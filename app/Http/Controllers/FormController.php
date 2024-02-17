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
                [
                    "Deal_Name" => $request->dealName,
                    "Stage" => $request->stage
                ]
            ]
        ];

        $accountData = [
            "data" => [
                [
                    "Account_Name" => $request->accountName,
                    "Website" => $request->website,
                    'Phone' => $request->phone
                ]
            ]
        ];

        $responseDeals = Http::withHeaders(
            ['Authorization' => $token]
        )
            ->post("https://www.zohoapis.eu/crm/v2/Deals", $dealData);

        $responseAccounts = Http::withHeaders(
            ['Authorization' => $token]
        )
            ->post("https://www.zohoapis.eu/crm/v2/Accounts", $accountData);

        return [];
    }

}
