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
        $applicant->DateofBirth = $request->input('DateofBirth');
        $applicant->gender = $request->input('gender');
        $applicant->id_number = $request->input('id_number');
        $applicant->KRA_number = $request->input('KRA_number');
        $applicant->county = $request->input('county');
        $applicant->residence = $request->input('residence');
        $applicant->currentChurch = $request->input('currentChurch');
        $applicant->relationshipStatus = $request->input('relationshipStatus');
        $applicant->Hobbies = $request->input('Hobbies');

        $applicant->sourceofReferral = $request->input('sourceofReferral');
        $applicant->reasonforApplication = $request->input('reasonforApplication');
        $applicant->Expectations = $request->input('Expectations');
        $applicant->Strengths = $request->input('Strengths');
        $applicant->Weakness = $request->input('Weakness');
        $applicant->multiRole = $request->input('multiRole');
        $applicant->internshipGoals = $request->input('internshipGoals');
        $applicant->criminalHistory = $request->input('criminalHistory');

        $applicant->Testimony = $request->input('Testimony');
        $applicant->additionalMessage = $request->input('additionalMessage');
        $applicant->prayerForm = $request->input('prayerForm');
        $applicant->fastingForm = $request->input('fastingForm');
        $applicant->witnessingForm = $request->input('witnessingForm');
        $applicant->bibleReadingForm = $request->input('bibleReadingForm');
        $applicant->charityForm = $request->input('charityForm');

        $applicant->SchoolName = $request->input('SchoolName');
        $applicant->course = $request->input('course');
        $applicant->SchoolAddress = $request->input('SchoolAddress');
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
        if($request->hasFile('passportPhoto')){
            $allowedExtensions = ['jpeg, png'];
            $passportPhoto = $request->file('passportPhoto');
            $extension = $passportPhoto->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only JPEG, png files allowed.'], 407);
            }
            $passportPhoto = $this->generate_file_name($passportPhoto);
            $applicant->passportPhoto = $passportPhoto;
        }

        if($request->hasFile('ID_front')){
            $allowedExtensions = ['jpeg, png'];
            $ID_front = $request->file('ID_front');
            $extension = $ID_front->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only JPEG, png files allowed.'], 407);
            }
            $ID_front = $this->generate_file_name($ID_front);
            $applicant->ID_front = $ID_front;
        }
        if($request->hasFile('ID_back')){
            $allowedExtensions = ['jpeg, png'];
            $ID_back = $request->file('ID_back');
            $extension = $ID_back->getClientOriginalExtension();
            if (!in_array($extension, $allowedExtensions)) {
                return response()->json(['message' => 'Only JPEG, png files allowed.'], 407);
            }
            $ID_back = $this->generate_file_name($ID_back);
            $applicant->ID_back = $ID_back;
        }


        $applicant->PersonalRefFirstName = $request->input('PersonalRefFirstName');
        $applicant->PersonalRefSecondName = $request->input('PersonalRefSecondName');
        $applicant->PersonalRefPhoneNumber = $request->input('PersonalRefPhoneNumber');
        $applicant->PersonalRefRelationship = $request->input('PersonalRefRelationship');
        $applicant->MinistryRefFirstName = $request->input('MinistryRefFirstName');
        $applicant->MinistryRefSecondName = $request->input('MinistryRefSecondName');
        $applicant->MinistryRefPhoneNumber = $request->input('MinistryRefPhoneNumber');
        $applicant->MinistryRefRelationship = $request->input('MinistryRefRelationship');

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
