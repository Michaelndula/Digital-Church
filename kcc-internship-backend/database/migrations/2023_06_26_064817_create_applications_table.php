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
            $table->string('id_number');
            $table->string('KRA_number');
            $table->string('DateofBirth');
            $table->string('gender');
            $table->string('county');
            $table->string('residence');
            $table->string('SchoolName')->nullable();
            $table->string('YearofGrad')->nullable();
            $table->string('SchoolAddress')->nullable();
            $table->string('course')->nullable();
            $table->binary('cv')->nullable();
            $table->binary('CoverLetter')->nullable();
            $table->binary('GoodConductCert')->nullable();
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
