<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name', 'cpf', 'email'];
    protected $hidden = [
        'cpf'
    ];

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
