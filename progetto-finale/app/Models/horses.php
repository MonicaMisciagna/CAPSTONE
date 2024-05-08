<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class horses extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 
        'breed', 
        'age', 
        'img', 
        'description', 
        'health_status', 
        'location', 
        'suitable_for', 
        'adoption_status',
        'sex'
        
    ];
    public function images()
    {
        return $this->hasMany(HorseImages::class);
    }
}
