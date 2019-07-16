<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name', 'cpf', 'email', 'address', 'postalcode'];
    protected $hidden = [
        'cpf'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
