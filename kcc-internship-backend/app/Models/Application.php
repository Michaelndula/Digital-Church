<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $table = "applications";

    protected $fillable = [
        'FullName', 'email', 'PhoneNumber', 'DateofBirth', 'gender', 'id_number', 'KRA_number',
        'residence', 'currentChurch', 'relationshipStatus', 'Hobbies',
        'sourceofReferral', 'reasonforApplication', 'Expectations', 'Strengths', 
        'Weakness', 'multiRole', 'internshipGoals', 'criminalHistory',
        'Testimony', 'additionalMessage', 'prayerForm', 'fastingForm', 'witnessingForm', 
        'bibleReadingForm', 'charityForm', 
        'cv', 'CoverLetter', 'GoodConductCert', 'passportPhoto', 'ID_front', 'ID_back',
        'PersonalRefFirstName', 'PersonalRefSecondName', 'PersonalRefPhoneNumber', 'PersonalRefRelationship',
        'MinistryRefFirstName', 'MinistryRefSecondName', 'MinistryRefPhoneNumber', 'MinistryRefRelationship'
    ];
}
