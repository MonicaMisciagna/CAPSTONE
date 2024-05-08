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
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('horse_id');
            $table->text('expense_description');
            $table->decimal('expense_amount', 10, 2);
            $table->date('expense_date');
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
        Schema::dropIfExists('expenses');
    }
};
