import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ricollocamento({ auth }) {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            offset: 120, 
            once: true,   
        });
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="d-flex flex-column align-items-center">
                
               <div className="max-w-sm w-full lg:max-w-full lg:flex" style={{ height: '90vh' }}>
                    <div
                        data-aos="fade-right" 
                        className="h-48 lg:h-auto lg:w-1/2 flex-none text-center overflow-hidden"
                        style={{
                            backgroundImage: "url('/img/hill.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        title="Collina"
                    >
                    </div>
                    <div
                        data-aos="fade-left" 
                        className="p-4 flex flex-col justify-between leading-normal"
                    >
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Perché affidare i cavalli a noi?</div>
                            <p className="text-gray-700 text-base">La nostra organizzazione offre ai cavalli una seconda opportunità di vivere una vita piena e gratificante.</p>
                            <ul className="list-disc list-inside mt-4">
                                <li><strong>Valutazione del cavallo</strong>: Il cavallo viene valutato da professionisti per determinarne la salute, il temperamento e le capacità residue.</li>
                                <li><strong>Preparazione</strong>: Il cavallo può richiedere riabilitazione o addestramento per adattarsi al nuovo ambiente o ruolo.</li>
                                <li><strong>Abbinamento</strong>: Cerchiamo di abbinare ogni cavallo con la famiglia o struttura più adatta alle sue esigenze.</li>
                            </ul>
                            <h2 className="text-xl font-semibold mb-4">Come funziona il processo?</h2>
                            <ol className="list-decimal list-inside mt-4">
                                <li><strong>Contatto iniziale</strong>: Contattateci per discutere le opzioni di ricollocamento o adozione.</li>
                                <li><strong>Valutazione</strong>: Determineremo insieme le esigenze specifiche del cavallo e le vostre preferenze.</li>
                                <li><strong>Preparazione</strong>: Il cavallo viene preparato e addestrato per adattarsi al nuovo ambiente.</li>
                                <li><strong>Abbinamento</strong>: Troviamo la famiglia o la struttura più adatta per il cavallo.</li>
                                <li><strong>Transizione</strong>: Vi guidiamo attraverso la transizione e offriamo supporto continuo.</li>
                            </ol>
                            <a href={route('contacts')} className="btn buttonCustom">Contattaci oggi stesso per iniziare</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm w-full lg:max-w-full lg:flex" style={{ height: '90vh' }}>
                    <div
                        data-aos="fade-right" 
                        className="p-4 flex flex-col justify-between leading-normal"
                    >
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Supporto continuo</div>
                            <p>Il nostro impegno per i cavalli non termina con la loro ricollocazione. Offriamo supporto ai nuovi proprietari e ai cavalli adottati per garantire una transizione agevole e cure adeguate.</p>
                            <p>Forniamo consigli e risorse per una gestione ottimale e ci teniamo in contatto per monitorare i progressi.</p>
                            <h2 className="text-xl font-semibold mb-4">Come iniziare?</h2>
                            <p>Se siete interessati a ricollocare un cavallo o adottarne uno, <a href={route('contacts')} className="text-black underline-black hover:underline">contattateci oggi stesso</a>. Siamo pronti a rispondere a qualsiasi domanda e a guidarvi attraverso il processo.</p>
                            <a href="/contacts" className="btn buttonCustom">Contattaci oggi stesso per iniziare</a>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left" 
                        className="h-48 lg:h-auto lg:w-1/2 flex-none text-center overflow-hidden"
                        style={{
                            backgroundImage: "url('/img/horsegirl.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionY: 'center'
                        }}
                        title="Ragazza con cavallo"
                    >
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


