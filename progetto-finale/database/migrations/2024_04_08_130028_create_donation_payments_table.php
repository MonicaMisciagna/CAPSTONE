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
        Schema::create('donation_payments', function (Blueprint $table) {
            
                $table->id();
                $table->unsignedBigInteger('donation_id');
                $table->string('payment_method');
                $table->string('transaction_id');
                $table->decimal('amount', 10, 2);
                $table->date('payment_date');
                $table->timestamps();
    
                // Foreign key
                $table->foreign('donation_id')->references('id')->on('donations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_payments');
    }
};
