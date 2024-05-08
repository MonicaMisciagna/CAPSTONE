<?php

namespace Database\Seeders;

use App\Models\donations;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DonationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Donations::create([
            'user_id' => 1,
            'amount' => 50.00,
            'donation_date' => '2024-04-08',
            'is_monthly' => 0,
        ]);

        Donations::create([
            'user_id' => 2,
            'amount' => 100.00,
            'donation_date' => '2024-03-20',
            'is_monthly' => 1,
        ]);

        Donations::create([
            'user_id' => 3,
            'amount' => 75.00,
            'donation_date' => '2024-02-15',
            'is_monthly' => 0,
        ]);

        Donations::create([
            'user_id' => 2,
            'amount' => 200.00,
            'donation_date' => '2024-01-10',
            'is_monthly' => 1,
        ]);

        Donations::create([
            'user_id' => 1,
            'amount' => 150.00,
            'donation_date' => '2024-05-05',
            'is_monthly' => 0,
        ]);

        Donations::create([
            'user_id' => 3,
            'amount' => 80.00,
            'donation_date' => '2024-06-20',
            'is_monthly' => 1,
        ]);

        Donations::create([
            'user_id' => 2,
            'amount' => 120.00,
            'donation_date' => '2024-07-15',
            'is_monthly' => 0,
        ]);

        Donations::create([
            'user_id' => 3,
            'amount' => 90.00,
            'donation_date' => '2024-08-10',
            'is_monthly' => 1,
        ]);

        Donations::create([
            'user_id' => 2,
            'amount' => 180.00,
            'donation_date' => '2024-09-25',
            'is_monthly' => 0,
        ]);

        donations::create([
            'user_id' => 3,
            'amount' => 110.00,
            'donation_date' => '2024-10-20',
            'is_monthly' => 1,
        ]);
    }
}
