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
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('email');
            $table->string('PhoneNumber');
            $table->string('gender');
            $table->string('address');
            $table->string('county');
            $table->string('residence');
            $table->string('country');
            $table->string('SchoolNAme');
            $table->string('SchoolAddress');
            $table->string('course');
            $table->string('YearofGrad');
            $table->string('RefFirstName');
            $table->string('RefSecondName');
            $table->string('RefPhoneNumber');
            $table->string('RefRelationship');
            $table->string('message');
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

 // $table->string('cv')->nullable();
            // $table->string('CoverLetter')->nullable();
            // $table->string('GoodConductCert')->nullable();
