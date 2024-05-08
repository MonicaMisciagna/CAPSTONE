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
        Schema::create('horse_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('horse_id');
            $table->string('image_url');
            $table->timestamps();

            $table->foreign('horse_id')->references('id')->on('horses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horse_images');
    }
};
