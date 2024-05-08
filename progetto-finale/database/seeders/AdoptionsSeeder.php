<?php

namespace Database\Seeders;

use App\Models\adoptions;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdoptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        adoptions::create([
            'horse_id' => 1,
            'user_id' => 1,
            'adoption_date' => '2024-04-01',
        ]);

        Adoptions::create([
            'horse_id' => 2,
            'user_id' => 2,
            'adoption_date' => '2024-03-15',
        ]);
    }
}
