<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class donations extends Model
{
    use HasFactory;
   

    protected $fillable = [
        'user_id',
        'amount',
        'donation_date',
        'is_monthly',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
