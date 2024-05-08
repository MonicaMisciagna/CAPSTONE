import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function HorseDetail({ auth, horse }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
         
        >
            <Head title={horse.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           
                            <div className='d-flex justify-content-center '>
                                <div className='pe-5 pt-3'>
                                <h1>{horse.name}</h1>
                                <p>Stato di adozione: {horse.adoption_status}</p>
                                <p>Sesso: {horse.sex}</p>
                                <p>Anno: {horse.age}</p>
                                <p>Razza: {horse.breed}</p>
                                <p>Locazione: {horse.location}</p>
                                <p>Stato di salute: {horse.health_status}</p>
                                
                                <p>Descrizione: {horse.description}</p>
                                <p>Esperienza cavaliere: {horse.suitable_for}</p>
                                <div className='py-4'>
                                <a href={route('adoptionforms.create', { horseId: horse.id})} className="buttonCustom  font-bold py-2 px-4 rounded">
                                    Crea una richiesta di adozione
                                </a>
                                <a
                                            onClick={() => window.history.back()}
                                            className="buttonCustom font-bold py-2 px-4 rounded ml-2"
                                        >
                                            Torna indietro
                                        </a>
                                </div>
                                </div>
                            <div >
                                
                                <img src={horse.img} alt={horse.name} className='imgcardcav' />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default HorseDetail;
