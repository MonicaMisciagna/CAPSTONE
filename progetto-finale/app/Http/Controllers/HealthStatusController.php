<?php

namespace App\Http\Controllers;

use App\Http\Requests\Storehealth_statusRequest;
use App\Http\Requests\Updatehealth_statusRequest;
use App\Models\health_status;

class HealthStatusController extends Controller
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
    public function store(Storehealth_statusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(health_status $health_status)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(health_status $health_status)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatehealth_statusRequest $request, health_status $health_status)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(health_status $health_status)
    {
        //
    }
}
