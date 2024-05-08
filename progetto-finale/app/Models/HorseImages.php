<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorseImages extends Model
{
    use HasFactory;
    public function horse()
    {
        return $this->belongsTo(horses::class);
    }
}
