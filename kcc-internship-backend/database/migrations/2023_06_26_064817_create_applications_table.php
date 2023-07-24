<?php

use Faker\Provider\ka_GE\PhoneNumber;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('FullName');
            $table->string('email');
            $table->string('PhoneNumber');
            $table->string('DateofBirth');
            $table->string('gender');
            $table->string('id_number');
            $table->string('KRA_number');           
            $table->string('county');
            $table->string('residence');
            $table->string('currentChurch');
            $table->string('relationshipStatus');
            $table->string('Hobbies');

            $table->string('sourceofReferral');
            $table->string('reasonforApplication');
            $table->string('Expectations');
            $table->string('Strengths');
            $table->string('Weakness');
            $table->string('multiRole');
            $table->string('internshipGoals');
            $table->string('criminalHistory');

            $table->string('Testimony');
            $table->string('additionalMessage');
            $table->string('prayerForm');
            $table->string('fastingForm');
            $table->string('witnessingForm');
            $table->string('bibleReadingForm');
            $table->string('charityForm');
            
            $table->string('SchoolName')->nullable();
            $table->string('course')->nullable();
            $table->string('SchoolAddress')->nullable();
            $table->string('YearofGrad')->nullable();

            $table->string('cv');
            $table->string('CoverLetter')->nullable();
            $table->string('GoodConductCert');
            $table->string('passportPhoto')->nullable();
            $table->string('ID_front');
            $table->string('ID_back');

            $table->string('PersonalRefFirstName');
            $table->string('PersonalRefSecondName');
            $table->string('PersonalRefPhoneNumber');
            $table->string('PersonalRefRelationship');
            $table->string('MinistryRefFirstName');
            $table->string('MinistryRefSecondName');
            $table->string('MinistryRefPhoneNumber');
            $table->string('MinistryRefRelationship');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
