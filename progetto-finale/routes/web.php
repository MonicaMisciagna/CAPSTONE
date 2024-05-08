<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HorsesController;
use App\Http\Controllers\DonationsController;

use App\Http\Controllers\UserController;
use App\Models\adoption_forms;
use App\Models\horses;
use App\Models\User;

use App\Http\Controllers\AdoptionFormsController;
use App\Http\Controllers\ContactController;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $horses= horses::all();
    return Inertia::render('Welcome', [
        'horses' => $horses,
        
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/ricollocamento', function () {
    return Inertia::render('Ricollocamento');
})->name('Ricollocamento');
Route::get('/adozioni', function () {
    return Inertia::render('Adozioni'); 
})->name('Adozioni');
Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->name('contacts');
Route::post('/contacts', [ContactController::class, 'handleContactForm'])->name('contacts.handleContactForm');
Route::get('/dashboard', function () {
    if (auth()->user()->role === 'admin') {
        $users= User::all();
        $horses= horses::all();
        $adoptionForms= adoption_forms::all();
    return Inertia::render('Admin/DashboardAdmin', ['users' => $users, 'horses' => $horses, 'adoptionForms' => $adoptionForms]);}
    else {
        return Inertia::render('Dashboard');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/horses', [HorsesController::class, 'index'])->name('horses.index');
Route::get('/horses/{horseId}', [HorsesController::class, 'show'])->name('horses.show');
Route::get('/adoptionforms/create/{horseId}', [AdoptionFormsController::class, 'create'])
    ->name('adoptionforms.create')
    ->middleware('auth');
Route::get('/adoptionforms', [AdoptionFormsController::class, 'index'])->name('adoptionforms.index');
Route::get('/DashboardAdmin/users', [UserController::class, 'index'])->name('users.index');
Route::get('/DashboardAdmin/horses', [HorsesController::class, 'index'])->name('dashboardAdmin.horses.index');

Route::get('/DashboardAdmin/adoptionforms', [AdoptionFormsController::class, 'index'])->name('adoptionForms.index');
Route::post('/adoptionforms/store/{horseId}', [AdoptionFormsController::class, 'store'])
    ->name('adoptionforms.store')
    ->middleware('auth');

Route::put('/users/{user}/updateRole', [UserController::class, 'updateRole'])->name('users.updateRole');
Route::put('/users/{user}/change-role', [UserController::class, 'changeRole'])->name('change_role');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
Route::get('/DashboardAdmin/horses/create', [HorsesController::class, 'create'])->name('horses.create');
Route::post('/DashboardAdmin/horses/store', [HorsesController::class, 'store'])->name('horses.store');
Route::get('/DashboardAdmin/horses/{horse}/edit', [HorsesController::class, 'edit'])->name('horses.edit');
Route::put('/DashboardAdmin/horses/{horse}', [HorsesController::class, 'update'])->name('horses.update');
Route::delete('/DashboardAdmin/horses/{id}', [HorsesController::class, 'destroy'])->name('horses.destroy');
Route::get('/DashboardAdmin/adoptionforms/{id}', [AdoptionFormsController::class, 'show'])->name('adoptionforms.show');
Route::put('/DashboardAdmin/adoptionforms/{id}/update', [AdoptionFormsController::class, 'update'])->name('adoption.update');

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verifyEmail');

 
Route::get('/email/verify/{id}/{hash}', function ($request) {
    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('email.verification.verify');

 
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::middleware(['auth'])->group(function () {
    Route::get('/donation', [DonationsController::class, 'create'])->name('donation.create');
    Route::post('/donation', [DonationsController::class, 'store'])->name('donation.store');
    Route::get('/donations', [DonationsController::class, 'index'])->name('donations.index');
    Route::get('/donation/{id}', [DonationsController::class, 'show'])->name('donation.show');
});

require __DIR__.'/auth.php';
