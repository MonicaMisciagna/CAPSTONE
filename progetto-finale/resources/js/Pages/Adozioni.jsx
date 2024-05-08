import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Adozioni = ({ auth }) => {

    useEffect(() => {
        AOS.init({
            duration: 800, 
            offset: 100,  
            once: true,    
        });
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="d-flex flex-column align-items-center">

                <div className="max-w-sm w-full lg:max-w-full lg:flex" style={{ height: '90vh' }}>
                    <div
                        className="h-48 lg:h-auto lg:w-1/2 flex-none text-center overflow-hidden"
                        style={{
                            backgroundImage: "url('/img/occhio.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        title="Donna che tiene una tazza"
                        data-aos="fade-right" 
                    >
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal" data-aos="fade-left">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Perché adottare?</div>
                            <p className="text-gray-700 text-base">La nostra associazione si impegna a offrire ai cavalli una seconda opportunità di trovare una casa amorevole attraverso il nostro programma di adozione.</p>
                            <h1 className="text-xl font-semibold mb-4">Il Processo di Adozione</h1>
                            <p>Il nostro processo di adozione è progettato per garantire una transizione sicura e serena per i cavalli e per i loro futuri proprietari.</p>
                            <ol className="list-decimal list-inside mt-4">
                                <li><strong>Contatto iniziale</strong>: Gli interessati possono contattarci per conoscere i cavalli disponibili per l'adozione.</li>
                                <li><strong>Visite e incontri</strong>: Organizziamo visite per incontrare i cavalli e discutere le esigenze e le aspettative dei futuri proprietari.</li>
                                <li><strong>Valutazione e selezione</strong>: Il nostro team valuterà la compatibilità tra il cavallo e il futuro proprietario per garantire un abbinamento adatto.</li>
                                <li><strong>Contratto di adozione</strong>: Una volta selezionato un cavallo, viene stipulato un contratto di adozione per formalizzare l'accordo.</li>
                                <li><strong>Transizione e supporto</strong>: Forniamo supporto continuo durante la transizione del cavallo nella nuova casa e per tutta la sua vita.</li>
                            </ol>
                            <a href="/contacts" className="btn buttonCustom">Contattaci oggi stesso per iniziare</a>
                        </div>
                    </div>
                </div>

              
                <div className="max-w-sm w-full lg:max-w-full lg:flex" style={{ height: '90vh' }}>
                    <div className="p-4 flex flex-col justify-between leading-normal" data-aos="fade-right">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Perché adottare da noi?</div>
                            <ul className="list-disc list-inside mt-4">
                                <li><strong>Selezione accurata</strong>: Valutiamo attentamente ogni cavallo e il potenziale adottante per garantire un abbinamento adatto.</li>
                                <li><strong>Assistenza continua</strong>: Forniamo supporto ai nuovi proprietari e seguiamo i progressi dei cavalli adottati.</li>
                                <li><strong>Impegno per il benessere</strong>: La salute e il benessere dei cavalli sono la nostra priorità assoluta.</li>
                                <li><strong>Opportunità di cambiamento</strong>: Adottare un cavallo offre una seconda possibilità di vivere una vita felice e dignitosa.</li>
                            </ul>
                            <h2 className="text-xl font-semibold mb-4">Cavalli Disponibili per l'Adozione</h2>
                            <p>Abbiamo diversi cavalli disponibili per l'adozione, ognuno con caratteristiche e personalità uniche.</p>
                            <a href="/horses" className="btn buttonCustom">Scopri i cavalli disponibili per l'adozione</a>
                        </div>
                    </div>
                    <div
                        className="h-48 lg:h-auto lg:w-1/2 flex-none text-center overflow-hidden"
                        style={{
                            backgroundImage: "url('/img/sole1.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionY: 'bottom'
                        }}
                        title="Donna che tiene una tazza"
                        data-aos="fade-left"
                    >
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Adozioni;
