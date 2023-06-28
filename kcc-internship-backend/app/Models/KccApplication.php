<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KccApplication extends Model
{
    use HasFactory;

    protected $table = "applications";

    protected $fillable = [
        'FullName', 'email', 'PhoneNumber', 'id_number',, 'DateofBirth', 'KRA_number', 'gender', 'address',
        'county', 'residence', 'country', 'SchoolName', 'SchoolAddress', 'course',
        'YearofGrad', 'RefFirstName', 'RefSecondName', 'RefPhoneNumber', 'RefRelationship',
        'message'
    ];
}
