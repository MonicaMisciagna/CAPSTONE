<?php

namespace Database\Seeders;

use App\Models\HorseImages;
use App\Models\horses;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HorseImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        HorseImages::create([
            'horse_id' => 1,
            'image_url' => 'https://d.wattpad.com/story_parts/480666036/images/14ec83620734c78f633179057505.jpg',
        ]);

        HorseImages::create([
            'horse_id' => 2,
            'image_url' => 'https://media.istockphoto.com/id/1409956947/it/foto/cavallo-galoppante-sul-prato-verde-primaverile.jpg?s=612x612&w=0&k=20&c=Ic6qztF4Yk7GqM2w9JNYR_IIXWA2nAAMePJhNB2GP6o=',
        ]);

        HorseImages::create([
            'horse_id' => 3,
            'image_url' => 'https://www.velvetpets.it/wp-content/uploads/2021/06/cavallo-Munstang.jpg',
        ]);
        HorseImages::create([
            'horse_id' => 4,
            'image_url' => 'https://qph.cf2.quoracdn.net/main-qimg-aeea2a3bfa27168d88b1e7827c0e533e-pjlq',
        ]);
        HorseImages::create([
            'horse_id' => 5,
            'image_url' => 'https://cdn.ehorses.media/image/blur/xxldetails/paint-horse-stallone-overo-tutti-i-colori-monta-americana-tuttofare-cavalli-monta-western-cavalli-per-ricreazione-stalloni-da-monta-eemnes_232605f3-4a56-4edc-a783-b36a8c8cef62.jpg',
        ]);

}
}
