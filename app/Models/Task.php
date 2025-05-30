<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'is_done',
        'user_id'
    ];

    protected $casts = [
        'is_done' => 'boolean',
        'user_id' => 'int'
    ];
}
