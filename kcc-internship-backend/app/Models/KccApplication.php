<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Controllers\KccApplicationController;

class KccApplication extends Model
{
    use HasFactory;

    protected $table = 'applications';

    protected $fillable = [
        'FirstName', 'LastName', 'email', 'PhoneNumber', 'gender', 'address',
        'county', 'residence', 'country', 'SchoolNAme', 'SchoolAddress', 'course',
        'YearofGrad', 'RefFirstName', 'RefSecondName', 'RefPhoneNumber', 'RefRelationship',
        'message'
    ];
}
