<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHorseImagesRequest;
use App\Http\Requests\UpdateHorseImagesRequest;
use App\Models\HorseImages;
use Inertia\Inertia;

class HorseImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHorseImagesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($horseId)
{
    
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HorseImages $horseImages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHorseImagesRequest $request, HorseImages $horseImages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HorseImages $horseImages)
    {
        //
    }
}
