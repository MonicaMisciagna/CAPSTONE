<?php namespace App\Mail;

use Illuminate\Mail\Mailable;

class WelcomeEmail extends Mailable
{
    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
         $this->subject('Benvenuto alla nostra applicazione!');

         return $this->view('emails.welcome', ['user' => $this->user]);
    }
}
