<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $table = "applications";

    protected $fillable = [
        'FullName', 'email', 'PhoneNumber', 'id_number','KRA_number', 'DateofBirth',  'gender', 'address',
        'county', 'residence', 'country', 'cv', 'CoverLetter', 'GoodConductCert', 'RefFirstName', 
        'RefSecondName', 'RefPhoneNumber', 'RefRelationship',
    ];
}
