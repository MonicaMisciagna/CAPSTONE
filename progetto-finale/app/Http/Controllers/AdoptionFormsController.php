<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdoption_FormsRequest;
use App\Http\Requests\UpdateAdoption_FormsRequest;
use App\Models\adoption_forms;


use App\Models\horses;
use Inertia\Inertia;

class AdoptionFormsController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->role === 'admin') {
            $adoptionForms = Adoption_Forms::all();
            $horses = Horses::all();
            return Inertia::render('Admin/AdoptionForms', ['adoptionForms' => $adoptionForms, 'horses' => $horses]);
        }

        $adoptionForms = Adoption_Forms::where('user_id', $user->id)->get();
        $horses = Horses::all();
        return Inertia::render('AdoptionFormsIndex', ['adoptionForms' => $adoptionForms, 'horses' => $horses]);
    }

    public function create($horseId)
    {
        $horse = Horses::findOrFail($horseId);
        return Inertia::render('AdoptionForms', ['horse' => $horse]);
    }

    public function store(StoreAdoption_FormsRequest $request, $horseId)
    {
        $validatedData = $request->validated();
    
       
        try {
            
            if (!$request->has('first_name')) {
                return response()->json([
                    'message' => 'First name is required in the request.'
                ], 400); 
            }
    
         
            $first_name = $request->input('first_name');
            $last_name = $request->input('last_name');
            $birth_date = $request->input('birth_date');
            $address_line1 = $request->input('address_line1');
            $city = $request->input('city');
            $province = $request->input('province');
            $phone = $request->input('phone');
            $email = $request->input('email');
            $num_equids_hosting = $request->input('num_equids_hosting');
            $facility_address_line1 = $request->input('facility_address_line1');
            $facility_city = $request->input('facility_city');
            $facility_province = $request->input('facility_province');
            $facility_postal_code = $request->input('facility_postal_code');
            $daytime_and_nighttime_housing = $request->input('daytime_and_nighttime_housing');
            $codice_stalla = $request->input('codice_stalla');
            $caretaker_info = $request->input('caretaker_info');
            $veterinarian_info = $request->input('veterinarian_info');
            $farrier_info = $request->input('farrier_info');

    
                    
            
            $adoptionForm = Adoption_forms::create([
                'user_id' => $request->user()->id,
                'horse_id' => $horseId,
                'adoption_status' => 'Pending',
                'first_name' => $first_name,
                'last_name' => $last_name,
                'birth_date' => $birth_date,
                'address_line1' => $address_line1,
                'city' => $city,
                'province' => $province,
                'phone' => $phone,
                'email' => $email,
                'num_equids_hosting' => $num_equids_hosting,
                'facility_address_line1' => $facility_address_line1,
                'facility_city' => $facility_city,
                'facility_province' => $facility_province,
                'facility_postal_code' => $facility_postal_code,
                'daytime_and_nighttime_housing' => $daytime_and_nighttime_housing,
                'codice_stalla' => $codice_stalla,
                'caretaker_info' => $caretaker_info,
                'veterinarian_info' => $veterinarian_info,
                'farrier_info' => $farrier_info,
            ]);
    
            
            return redirect()->route('adoptionforms.index')->with('success', 'Adoption request submitted successfully');
        } catch (\Exception $e) {
            
            \Log::error('Error in AdoptionFormsController@store: ' . $e->getMessage());
            

            return Inertia::render('Error', [
                'message' => 'Internal server error',
                'error' => $e->getMessage()
            ]);
        }
    }
    public function show($id)
    {
        $adoptionForm = adoption_forms::findOrFail($id);
        $horses = Horses::all();
        return Inertia::render('AdoptionFormsDetails', ['adoptionForm' => $adoptionForm, 'horses' => $horses]);
    }

    public function update(UpdateAdoption_FormsRequest $request, $id)
    {  $adoptionForm = adoption_forms::findOrFail($id);
        $request->validate([
            'adoption_status' => 'required|in:Pending,Approved,Rejected',
        ]);

       
        $adoptionForm->update([
            'adoption_status' => $request->adoption_status,
        ]);

        return redirect()->back()->with('success', 'Stato adozione aggiornato con successo!');
    
    
       
    }
    
    public function destroy($horseId)
    {
        Adoption_Forms::where('horse_id', $horseId)->delete();

        $horse = Horses::findOrFail($horseId);
        $horse->delete();

        return redirect()->back()->with('success', 'Cavallo eliminato con successo!');
    }
}
