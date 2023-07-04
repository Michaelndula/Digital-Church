<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;

class KccApplicationController extends Controller
{
    function Application (Request $request){
        
        $fullName = $request->input('FullName');

        $existingApplicant = Application::where('FullName', $fullName)->first();

        if ($existingApplicant) {
            return response()->json(['message' => 'Applicant already exists'], 409);
        }

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
            $allowedExtensions = ['pdf', 'doc', 'docx'];
            $cv = $request->file('cv');
            $extension = $cv->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only PDF or Word documents are allowed.'], 406);
            }
            $cv = $this->generate_file_name($cv);
            $applicant->cv = $cv;
        }
        

        if($request->hasFile('CoverLetter')){
            $allowedExtensions = ['pdf', 'doc', 'docx'];
            $CoverLetter = $request->file('CoverLetter');
            $extension = $CoverLetter->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only PDF or Word documents are allowed.'], 406);
            }
            $CoverLetter = $this->generate_file_name($CoverLetter);
            $applicant->CoverLetter = $CoverLetter;
        }

        if($request->hasFile('GoodConductCert')){
            $allowedExtensions = ['pdf', 'doc', 'docx'];
            $GoodConductCert = $request->file('GoodConductCert');
            $extension = $GoodConductCert->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only PDF or Word documents are allowed.'], 406);
            }
            $GoodConductCert = $this->generate_file_name($GoodConductCert);
            $applicant->GoodConductCert = $GoodConductCert;
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
        $location = 'files';

        $file->move($location, $filename);
        $profile = public_path($location . "/" . $filename);
        $profile = substr($profile, strrpos($profile, '/') + 1);

        return $profile;
    }
}
