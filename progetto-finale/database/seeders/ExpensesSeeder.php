<?php

namespace Database\Seeders;

use App\Models\expenses;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExpensesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Expenses::create([
            'horse_id' => 1,
            'expense_description' => 'Vaccinazione annuale',
            'expense_amount' => 50.00,
            'expense_date' => '2024-04-08',
        ]);

        Expenses::create([
            'horse_id' => 2,
            'expense_description' => 'Ferratura',
            'expense_amount' => 80.00,
            'expense_date' => '2024-03-20',
        ]);

        Expenses::create([
            'horse_id' => 3,
            'expense_description' => 'Controllo veterinario',
            'expense_amount' => 120.00,
            'expense_date' => '2024-02-15',
        ]);

        Expenses::create([
            'horse_id' => 1,
            'expense_description' => 'Trattamento dentale',
            'expense_amount' => 90.00,
            'expense_date' => '2024-01-10',
        ]);

        Expenses::create([
            'horse_id' => 2,
            'expense_description' => 'Visita fisioterapista',
            'expense_amount' => 100.00,
            'expense_date' => '2024-05-05',
        ]);

        Expenses::create([
            'horse_id' => 3,
            'expense_description' => 'Acquisto nuova coperta',
            'expense_amount' => 70.00,
            'expense_date' => '2024-06-20',
        ]);

        Expenses::create([
            'horse_id' => 4,
            'expense_description' => 'Integratori alimentari',
            'expense_amount' => 60.00,
            'expense_date' => '2024-07-15',
        ]);

        Expenses::create([
            'horse_id' => 5,
            'expense_description' => 'Esame del sangue',
            'expense_amount' => 110.00,
            'expense_date' => '2024-08-10',
        ]);

        Expenses::create([
            'horse_id' => 4,
            'expense_description' => 'Trattamento antiparassitario',
            'expense_amount' => 45.00,
            'expense_date' => '2024-09-25',
        ]);

        expenses::create([
            'horse_id' => 5,
            'expense_description' => 'Corso di addestramento',
            'expense_amount' => 150.00,
            'expense_date' => '2024-10-20',
        ]);
    }
}
