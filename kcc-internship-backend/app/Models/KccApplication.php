<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KccApplication extends Model
{
    use HasFactory;

    protected $table = "applications";

    protected $fillable = [
        'FullName', 'email', 'PhoneNumber', 'DateofBirth', 'gender', 'id_number', 'KRA_number', 'address',
        'county', 'residence', 'currentChurch', 'relationshipStatus', 'Hobbies',
        'sourceofReferral', 'reasonforApplication', 'Expectations', 'Strengths', 'Weakness', 'multiRole', 'internshipGoals', 'criminalHistory',
        'Testimony', 'additionalMessage', 'prayerForm', 'fastingForm', 'witnessingForm', 'bibleReadingForm', 'charityForm', 
        'SchoolName', 'course', 'SchoolAddress', 'YearofGrad', 
        'cv', 'CoverLetter', 'GoodConductCert', 'passportPhoto', 'ID_front', 'ID_back',
        'PersonalRefFirstName', 'PersonalRefSecondName', 'PersonalRefPhoneNumber', 'PersonalRefRelationship',
        'MinistryRefFirstName', 'MinistryRefSecondName', 'MinistryRefPhoneNumber', 'MinistryRefRelationship'
    ];
}
