<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('/tasks', TaskController::class);
    Route::patch('/tasks/update-done/{task}', [TaskController::class, 'updateDone']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});