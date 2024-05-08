<?php

namespace Database\Seeders;

use App\Models\horses;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HorsesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    
    public function run(): void
    {
        Horses::create([
            'name' => 'Black Beauty',
            'breed' => 'Puro Sangue',
            'img' => 'https://d.wattpad.com/story_parts/480666036/images/14ec83620734c78f633179057505.jpg',
            'sex' => 'stallone',
            'age' => 2016, 
            'description' => 'Cavallo nero bello con temperamento gentile.',
            'health_status' => 'buono',
            'location' => 'Bologna',
            'suitable_for' => 'Tutti i cavalieri',
            'adoption_status' => 'disponibile'
        ]);

        Horses::create([
            'name' => 'Spirito',
            'breed' => 'Mustang',
            'img' => 'https://media.istockphoto.com/id/1409956947/it/foto/cavallo-galoppante-sul-prato-verde-primaverile.jpg?s=612x612&w=0&k=20&c=Ic6qztF4Yk7GqM2w9JNYR_IIXWA2nAAMePJhNB2GP6o=',
            'sex' => 'stallone',
            'age' => 2018, 
            'description' => 'Mustang selvaggio e indipendente con una forte personalità.',
            'health_status' => 'buono',
            'location' => 'Parma',
            'suitable_for' => 'Cavalieri esperti',
            'adoption_status' => 'adottato'
        ]);

        Horses::create([
            'name' => 'Duca',
            'breed' => 'Quarter Horse Americano',
            'img' => 'https://www.velvetpets.it/wp-content/uploads/2021/06/cavallo-Munstang.jpg',
            'sex' => 'castrone',
            'age' => 2014,
            'description' => 'Cavallo robusto e affidabile, adatto per il lavoro nel ranch.',
            'health_status' => 'eccellente',
            'location' => 'Modena', 
            'suitable_for' => 'Cavalieri intermedi',
            'adoption_status' => 'disponibile'
        ]);

        Horses::create([
            'name' => 'Luce di Stelle',
            'breed' => 'Arabo',
            'img' => 'https://qph.cf2.quoracdn.net/main-qimg-aeea2a3bfa27168d88b1e7827c0e533e-pjlq',
            'sex' => 'femmina',
            'age' => 2012, 
            'description' => 'Elegante cavallo arabo con passo aggraziato e comportamento dolce.',
            'health_status' => 'eccellente',
            'location' => 'Ravenna', 
            'suitable_for' => 'Cavalieri avanzati',
            'adoption_status' => 'disponibile'
        ]);

        Horses::create([
            'name' => 'Ruggine',
            'breed' => 'Paint Horse',
            'img' => 'https://cdn.ehorses.media/image/blur/xxldetails/paint-horse-stallone-overo-tutti-i-colori-monta-americana-tuttofare-cavalli-monta-western-cavalli-per-ricreazione-stalloni-da-monta-eemnes_232605f3-4a56-4edc-a783-b36a8c8cef62.jpg',
            'sex' => 'castrone',
            'age' => 2013, 
            'description' => 'Cavallo paint colorato con disposizione amichevole e amore per le passeggiate.',
            'health_status' => 'buono',
            'location' => 'Ferrara', 
            'suitable_for' => 'Tutti i cavalieri',
            'adoption_status' => 'disponibile'
        ]);
    }
}
