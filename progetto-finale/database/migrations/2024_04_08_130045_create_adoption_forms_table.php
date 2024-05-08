<?php

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
        Schema::create('adoption_forms', function (Blueprint $table) {
            $table->id() ;
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('horse_id');
            $table->enum('adoption_status', ['Pending', 'Approved', 'Rejected'])->default('Pending');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('address_line1')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->unsignedTinyInteger('num_equids_hosting')->nullable();
            $table->string('facility_address_line1')->nullable();
            $table->string('facility_city')->nullable();
            $table->string('facility_province')->nullable();
            $table->string('facility_postal_code')->nullable();
            $table->text('daytime_and_nighttime_housing')->nullable();
            $table->string('codice_stalla')->nullable();
            $table->text('caretaker_info')->nullable();
            $table->text('veterinarian_info')->nullable();
            $table->text('farrier_info')->nullable();
            $table->softDeletes();
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('horse_id')->references('id')->on('horses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adoption_forms');
    }
};
