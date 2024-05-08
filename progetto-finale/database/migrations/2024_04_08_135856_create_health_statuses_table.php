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
        Schema::create('health_statuses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('horse_id');
            $table->text('health_condition');
            $table->text('treatment_description')->nullable();
            $table->date('treatment_start_date')->nullable();
            $table->date('treatment_end_date')->nullable();
            $table->string('veterinarian_name')->nullable();
            $table->string('veterinarian_contact')->nullable();
            $table->timestamps();

            // Foreign key
            $table->foreign('horse_id')->references('id')->on('horses');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_statuses');
    }
};
