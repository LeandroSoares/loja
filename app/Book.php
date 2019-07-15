<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['title', 'subject', 'publish_year', 'price', 'quantity'];
    protected $with=['authors'];
    public function authors()
    {
        return $this->belongsToMany(Author::class);
    }
}
