<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::inertia('/', 'Auth/Login')->name('login');

Route::group(['middleware' =>'auth'], function () {
    Route::resource('posts', \App\Http\Controllers\PostController::class);
    Route::inertia('about', 'About')->name('pages.about');
});
//Login
Route::inertia('login', 'Auth/Login')->name('login');
Route::post('login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->name('login.post');

//Register
Route::inertia('register', 'Auth/Register')->name('register');
Route::post('register', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])
    ->name('register.post');

//logout
Route::post('logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])
    ->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});