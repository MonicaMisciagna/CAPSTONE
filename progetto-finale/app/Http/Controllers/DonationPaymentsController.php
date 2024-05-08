<?php

namespace App\Http\Controllers;

use App\Http\Requests\Storedonation_paymentsRequest;
use App\Http\Requests\Updatedonation_paymentsRequest;
use App\Models\donation_payments;

class DonationPaymentsController extends Controller
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
    public function store(Storedonation_paymentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(donation_payments $donation_payments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(donation_payments $donation_payments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatedonation_paymentsRequest $request, donation_payments $donation_payments)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(donation_payments $donation_payments)
    {
        //
    }
}
