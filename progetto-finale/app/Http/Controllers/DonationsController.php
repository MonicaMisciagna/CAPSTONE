<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoredonationsRequest;
use App\Http\Requests\UpdatedonationsRequest;
use App\Models\donations;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DonationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $donations = Donations::all();

        return Inertia::render('DonationsIndex', [
            'donations' => $donations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   $user=Auth::user();

        return Inertia::render('Donations', ['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoredonationsRequest $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric|min:0.01',
            'donation_date' => 'required|date',
            'is_monthly' => 'required|boolean',
        ]);

        // Crea una nuova donazione.
        Donations::create($validatedData);

        // Restituisci una risposta di successo o un messaggio di feedback.
        return response()->json(['message' => 'Donazione inviata con successo']);
    }

    /**
     * Display the specified resource.
     */
    public function show(donations $donations, $id)
    {
        $donation = Donations::findOrFail($id);

        return Inertia::render('DonationDetails', [
            'donation' => $donation,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(donations $donations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatedonationsRequest $request, donations $donations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(donations $donations)
    {
        //
    }
}
