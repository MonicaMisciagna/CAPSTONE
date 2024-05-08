<?php

namespace Database\Seeders;

use App\Models\adoption_forms;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdoptionFormsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::find(1);
        adoption_forms::create([
            'user_id' => 1,
            'horse_id' => 1,
            'adoption_status' => 'Pending',
            'first_name' => 'Mario',
            'last_name' => 'Rossi',
            'birth_date' => '1980-05-15',
            'address_line1' => 'Via Roma 10',
            'city' => 'Bologna',
            'province' => 'BO',
            'phone' => '123456789',
            'email' => $user1->email, 
            'num_equids_hosting' => 2,
            'facility_address_line1' => 'Via Garibaldi 5',
            'facility_city' => 'Bologna',
            'facility_province' => 'BO',
            'facility_postal_code' => '40100',
            'daytime_and_nighttime_housing' => 'Allevati in paddock durante il giorno, stabulati durante la notte.',
            'codice_stalla' => 'BO12345',
            'caretaker_info' => 'Luca Bianchi, 10 anni di esperienza con cavalli',
            'veterinarian_info' => 'Dr. Giuseppe Verdi, 20 anni di esperienza',
            'farrier_info' => 'Marco Rossi, 15 anni di esperienza'
        ]);

        $user2 = User::find(2);
        adoption_forms::create([
            'user_id' => 2,
            'horse_id' => 2,
            'adoption_status' => 'Approved', 
            'first_name' => 'Luca',
            'last_name' => 'Bianchi',
            'birth_date' => '1990-08-10',
            'address_line1' => 'Via Mazzini 12',
            'city' => 'Parma',
            'province' => 'PR',
            'phone' => '987654321',
            'email' => $user2->email, 
            'num_equids_hosting' => 3,
           'facility_address_line1' => 'Via Verdi 8',
            'facility_city' => 'Parma',
            'facility_province' => 'PR',
            'facility_postal_code' => '43100',
            'daytime_and_nighttime_housing' => 'Allevati in paddock durante il giorno, stabulati durante la notte.',
            'codice_stalla' => 'PR67890',
            'caretaker_info' => 'Francesca Gialli, 8 anni di esperienza con cavalli',
            'veterinarian_info' => 'Dr. Paolo Rossi, 15 anni di esperienza',
            'farrier_info' => 'Stefano Verdi, 10 anni di esperienza'
        ]);
    }
}
