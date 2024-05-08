<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Adoption_Forms extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'adoption_forms';
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'horse_id',
        'first_name',
        'last_name',
        'birth_date',
        'address_line1',
        'city',
        'province',
        'phone',
        'email',
        'num_equids_hosting',
        'facility_address_line1',
        'facility_city',
        'facility_province',
        'facility_postal_code',
        'daytime_and_nighttime_housing',
        'codice_stalla',
        'caretaker_info',
        'veterinarian_info',
        'farrier_info',
        'adoption_status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function horse()
    {
        return $this->belongsTo(horses::class);
    }
}
