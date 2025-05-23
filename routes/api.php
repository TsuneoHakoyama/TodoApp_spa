<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('/tasks', TaskController::class);
Route::patch('/tasks/update-done/{task}', [TaskController::class, 'updateDone']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
