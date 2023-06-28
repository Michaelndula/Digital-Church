<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;

class KccApplicationController extends Controller
{
    function Application (Request $request){
        
        $applicant = new Application;

        $applicant->FullName = $request->input('FullName');
        $applicant->email = $request->input('email');
        $applicant->PhoneNumber = $request->input('PhoneNumber');
        $applicant->id_number = $request->input('id_number');
        $applicant->KRA_number = $request->input('KRA_number');
        $applicant->DateofBirth = $request->input('DateofBirth');
        $applicant->gender = $request->input('gender');
        $applicant->county = $request->input('county');
        $applicant->residence = $request->input('residence');
        $applicant->SchoolName = $request->input('SchoolName');
        $applicant->SchoolAddress = $request->input('SchoolAddress');
        $applicant->course = $request->input('course');
        $applicant->YearofGrad = $request->input('YearofGrad');
       

        if($request->hasFile('cv')){
            $cv = $request->file('cv');
            $cv = $this->generate_file_name($cv);
            $applicant->cv= $request->$cv;
        }

        if($request->hasFile('CoverLetter')){
            $CoverLetter = $request->file('CoverLetter');
            $CoverLetter = $this->generate_file_name($CoverLetter);
            $applicant->CoverLetter= $request->$CoverLetter;
        }

        if($request->hasFile('GoodConductCert')){
            $GoodConductCert = $request->file('GoodConductCert');
            $GoodConductCert = $this->generate_file_name($GoodConductCert);
            $applicant->GoodConductCert= $request->$GoodConductCert;
        }


        $applicant->RefFirstName = $request->input('RefFirstName');
        $applicant->RefSecondName = $request->input('RefSecondName');
        $applicant->RefPhoneNumber = $request->input('RefPhoneNumber');
        $applicant->RefRelationship = $request->input('RefRelationship');
        $applicant->message = $request->input('message');

        $applicant->save();

        return response()->json([
            'message' => 'Application sent successfully',
            'applicant' => $applicant
        ], 201);

        // $applicant = KccApplication::all();
    }

    public function generate_file_name($file)
    {
        $filename =  $file->getClientOriginalName();
        $location = 'uploads';

        $file->move($location, $filename);
        $profile = public_path($location . "/" . $filename);
        $profile = substr($profile, strrpos($profile, '/') + 1);

        return $profile;
    }
}
