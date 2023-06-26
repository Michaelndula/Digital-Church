<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KccApplication;

class KccApplicationController extends Controller
{
    function Application (Request $request){
        
        $applicant = new KccApplication;

        $applicant->FirstName = $request->input('FirstName');
        $applicant->LastName = $request->input('LastName');
        $applicant->email = $request->input('email');
        $applicant->PhoneNumber = $request->input('PhoneNumber');
        $applicant->gender = $request->input('gender');
        $applicant->address = $request->input('address');
        $applicant->county = $request->input('county');
        $applicant->residence = $request->input('residence');
        $applicant->country = $request->input('country');
        $applicant->SchoolNAme = $request->input('SchoolNAme');
        $applicant->SchoolAddress = $request->input('SchoolAddress');
        $applicant->course = $request->input('course');
        $applicant->YearofGrad = $request->input('YearofGrad');

        $applicant->$request->file('cv');
        if ($applicant) {
            $fileName = $applicant->getClientOriginalName();
            $applicant->storeAs('public', $fileName);
    
            // Code to handle the uploaded file
        }

        $applicant->$request->file('CoverLetter');
        if ($applicant) {
            $fileName = $applicant->getClientOriginalName();
            $applicant->storeAs('public', $fileName);
    
            // Code to handle the uploaded file
        }

        $applicant->$request->file('GoodConductCert');
        if ($applicant) {
            $fileName = $applicant->getClientOriginalName();
            $applicant->storeAs('public', $fileName);
    
            // Code to handle the uploaded file
        }

        $applicant->RefFirstName = $request->input('RefFirstName');
        $applicant->RefSecondName = $request->input('RefSecondName');
        $applicant->RefPhoneNumber = $request->input('RefPhoneNumber');
        $applicant->RefRelationship = $request->input('RefRelationship');
        $applicant->message = $request->input('message');
    }
}
