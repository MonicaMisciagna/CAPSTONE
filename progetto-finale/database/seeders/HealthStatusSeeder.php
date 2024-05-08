<?php

namespace Database\Seeders;

use App\Models\health_status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HealthStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        health_status::create([
            'horse_id' => 1,
            'health_condition' => 'Good',
            'treatment_description' => 'Routine checkup',
            'treatment_start_date' => now()->subMonths(6),
            'treatment_end_date' => null,
            'veterinarian_name' => 'Dr. Johnson',
            'veterinarian_contact' => 'johnson@example.com',
        ]);

        health_status::create([
            'horse_id' => 2,
            'health_condition' => 'Fair',
            'treatment_description' => 'Minor injury treated',
            'treatment_start_date' => now()->subMonths(2),
            'treatment_end_date' => now()->subMonths(1),
            'veterinarian_name' => 'Dr. Smith',
            'veterinarian_contact' => 'smith@example.com',
        ]);

        health_status::create([
            'horse_id' => 3,
            'health_condition' => 'Poor',
            'treatment_description' => 'Undergoing treatment for illness',
            'treatment_start_date' => now()->subMonths(3),
            'treatment_end_date' => now(),
            'veterinarian_name' => 'Dr. Williams',
            'veterinarian_contact' => 'williams@example.com',
        ]);

        health_status::create([
            'horse_id' => 4,
            'health_condition' => 'Good',
            'treatment_description' => null,
            'treatment_start_date' => null,
            'treatment_end_date' => null,
            'veterinarian_name' => null,
            'veterinarian_contact' => null,
        ]);

        health_status::create([
            'horse_id' => 5,
            'health_condition' => 'Fair',
            'treatment_description' => 'Recovering from a cold',
            'treatment_start_date' => now()->subMonths(1),
            'treatment_end_date' => now()->subDays(5),
            'veterinarian_name' => 'Dr. Brown',
            'veterinarian_contact' => 'brown@example.com',
        ]);

        health_status::create([
            'horse_id' => 3,
            'health_condition' => 'Poor',
            'treatment_description' => 'Under observation for lameness',
            'treatment_start_date' => now()->subWeeks(2),
            'treatment_end_date' => now()->subWeeks(1),
            'veterinarian_name' => 'Dr. Martinez',
            'veterinarian_contact' => 'martinez@example.com',
        ]);
    }
}
