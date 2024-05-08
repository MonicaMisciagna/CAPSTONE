<?php

namespace App\Http\Controllers;


use App\Models\user;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    { if (auth()->user()->role === 'admin') {
        $users = User::all();
        return Inertia::render('Admin/Users', ['users' => $users]);}
    }
    public function updateRole(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        
        $request->validate([
            'role' => 'required|in:admin,user',
        ]);

        $user->update([
            'role' => $request->role,
        ]);

        return redirect()->back()->with('success', 'Ruolo dell\'utente aggiornato con successo!');
    }
    
public function destroy(User $user)
{
    if (auth()->user()->role === 'admin') {
       $user->delete();

        return redirect()->back()->with('success', 'Utente eliminato con successo!');
    }

    return redirect()->back()->with('error', 'Non hai i permessi per eliminare questo utente.');
}
}
