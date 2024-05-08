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
        Schema::create('horses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('breed')->nullable();
            $table->string('img')->nullable();
            $table->enum('sex', ['stallone', 'femmina', 'castrone'])->nullable();
            $table->integer('age')->nullable();
            $table->text('description')->nullable();
            $table->enum('health_status', ['eccellente', 'buono','precario'])->nullable();
            $table->enum('adoption_status', ['disponibile', 'adozione a distanza', 'adottato'])->default('disponibile');
            $table->string('location')->nullable(); 
            $table->string('suitable_for')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horses');
    }
};
