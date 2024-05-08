<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorehorsesRequest;
use App\Http\Requests\UpdatehorsesRequest;
use App\Models\horses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia; 


class HorsesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
      $user = auth()->user();
      $horses = horses::all();
      if ($user !== null && $user->role === 'admin') {
    return Inertia::render('Admin/HorsesAdmin', ['horses' => $horses]);
} else {
    return Inertia::render('Horses/Index', ['horses' => $horses]);
}


       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Horses/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorehorsesRequest $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'breed' => 'required|string|max:255',
            'age' => 'required|integer',
            'img' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'health_status' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'suitable_for' => 'required|string|max:255',
            'adoption_status' => 'required|string|max:255',
        ]);

        $horse = horses::create($request->all());

        return redirect()->route('horses.index')->with('success', 'Nuovo cavallo creato con successo!');
    }

    /**
     * Display the specified resource.
     */
    public function show($horseId)
    {
        $horse = horses::find($horseId);

        return inertia('Horses/HorseDetail', ['horse' => $horse]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($horseId)
    {
        $horse = horses::findOrFail($horseId);
        return inertia('Admin/EditHorse', ['horse' => $horse, 'auth' => Auth::user()]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatehorsesRequest $request, horses $horse)
{
    // Validazione dei dati inviati dal form
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'breed' => 'required|string|max:255',
        'age' => 'required|integer',
        'img' => 'required|string|max:255',
        'description' => 'required|string|max:255',
        'health_status' => 'required|string|max:255',
        'location' => 'required|string|max:255',
        'suitable_for' => 'required|string|max:255',
        'adoption_status' => 'required|string|max:255',
    ]);

    $horse->update($validatedData);

    return Redirect::route('horses.index')->with('success', 'Cavallo aggiornato con successo.');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $horse = Horses::findOrFail($id);
        $horse->delete();
    
        return redirect()->back()->with('success', 'Cavallo eliminato con successo!');
    }
}
