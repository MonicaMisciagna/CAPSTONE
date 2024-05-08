<?php

namespace Database\Seeders;

use App\Models\donation_payments;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DonationPaymentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        donation_payments::create([
            'donation_id' => 1,
            'payment_method' => 'Credit Card',
            'transaction_id' => 'ABC123',
            'amount' => 50.00,
            'payment_date' => '2024-04-08',
        ]);

        donation_payments::create([
            'donation_id' => 2,
            'payment_method' => 'PayPal',
            'transaction_id' => 'DEF456',
            'amount' => 100.00,
            'payment_date' => '2024-03-20',
        ]);

        donation_payments::create([
            'donation_id' => 3,
            'payment_method' => 'Bank Transfer',
            'transaction_id' => 'GHI789',
            'amount' => 75.00,
            'payment_date' => '2024-02-15',
        ]);

      

        donation_payments::create([
            'donation_id' => 5,
            'payment_method' => 'PayPal',
            'transaction_id' => 'MNO345',
            'amount' => 150.00,
            'payment_date' => '2024-05-05',
        ]);

        donation_payments::create([
            'donation_id' => 6,
            'payment_method' => 'Bank Transfer',
            'transaction_id' => 'PQR678',
            'amount' => 80.00,
            'payment_date' => '2024-06-20',
        ]);

        donation_payments::create([
            'donation_id' => 7,
            'payment_method' => 'Credit Card',
            'transaction_id' => 'STU901',
            'amount' => 120.00,
            'payment_date' => '2024-07-15',
        ]);

       

        donation_payments::create([
            'donation_id' => 9,
            'payment_method' => 'Bank Transfer',
            'transaction_id' => 'YZA567',
            'amount' => 180.00,
            'payment_date' => '2024-09-25',
        ]);

        donation_payments::create([
            'donation_id' => 10,
            'payment_method' => 'Credit Card',
            'transaction_id' => 'BCD890',
            'amount' => 110.00,
            'payment_date' => '2024-10-20',
        ]);
    }
}
