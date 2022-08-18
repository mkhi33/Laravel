<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidato extends Model
{
    use HasFactory;
    protected $fillable = ['cv', 'user_id', 'vacante_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
