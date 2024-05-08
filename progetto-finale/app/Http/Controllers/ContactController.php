<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;

class ContactController extends Controller
{
    public function handleContactForm(Request $request)
    {
       
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        try {
            
            Mail::to('equirescue@equirescue.com')->send(new ContactEmail($validatedData));
            
           
            return response()->json(['message' => 'Message sent successfully'], 200);
        } catch (\Exception $e) {
          
            Log::error('Error in handleContactForm: ' . $e->getMessage());

           
            return response()->json(['error' => 'An error occurred while sending the email'], 500);
        }
    }
}
