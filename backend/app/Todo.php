<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = [
        'completed', 'title'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
