<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\PostController;
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


Route::redirect('/', 'login');

Route::group(['middleware' =>'auth'], function () {
    Route::resource('posts', PostController::class);
    Route::inertia('about', 'About')->name('pages.about');
});
//Login
Route::inertia('login', 'Auth/Login')->name('login');
Route::post('login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->name('login.post');

//Register
Route::inertia('register', 'Auth/Register')->name('register');
Route::post('register', [RegisterController::class, 'store'])
    ->name('register.post');

//logout
Route::post('logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])
    ->name('logout');

Route::controller(ProfileController::class)->middleware('auth')->as('profile.')->group(function () {
    Route::get('/profile', 'edit')->name('edit');
    Route::patch('/profile', 'update')->name('update');
    Route::delete('/profile', 'destroy')->name('destroy');
});
