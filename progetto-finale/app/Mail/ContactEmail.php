<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactEmail extends Mailable
{
    use SerializesModels;

    public $contactData;

    /**
     * Crea una nuova istanza di ContactEmail.
     *
     * @param array $contactData
     */
    public function __construct(array $contactData)
    {
        $this->contactData = $contactData;
    }

    /**
     * Costruisce l'email.
     */
    public function build()
    {
        return $this->subject('Nuovo messaggio di contatto')
                    ->view('emails.contact')
                    ->with([
                        'name' => $this->contactData['name'],
                        'email' => $this->contactData['email'],
                        'message' => $this->contactData['message'],
                    ]);
    }
}
