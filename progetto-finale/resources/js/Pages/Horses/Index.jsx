import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function HorsesIndex({ auth, horses }) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [adoptionStatus, setAdoptionStatus] = React.useState('all');

    const filteredHorses = horses.filter(horse => {
        const matchesSearchTerm = horse.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAdoptionStatus = adoptionStatus === 'all' || horse.adoption_status === adoptionStatus;
        return matchesSearchTerm && matchesAdoptionStatus;
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div style={{ backgroundColor: '#F29230', color: 'white' }} className="text white px-4 py-6 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl leading-tight text-center">I nostri cavalli</h2>
                    <p className="text-center">
                        Benvenuto nella nostra pagina dedicata all'adozione dei cavalli! Qui troverai una varietà di cavalli pronti a trovare una nuova casa e una famiglia amorevole. Ogni cavallo ha la propria storia unica e personalità. Esplora i nostri profili e trova il cavallo perfetto per te. Adottando, darai a un cavallo l'opportunità di una vita migliore. Grazie per il tuo interesse e il tuo supporto!
                    </p>
                    
                    <div className="mb-4 text-black">
                        <input
                            type="text"
                            placeholder="Cerca cavallo per nome"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="mb-4 text-black">
                        <label htmlFor="adoption-status" className="block text-white mb-2">Stato di adozione:</label>
                        <select
                            id="adoption-status"
                            value={adoptionStatus}
                            onChange={(e) => setAdoptionStatus(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="all">Tutti gli stati</option>
                            <option value="adottato">Adottato</option>
                            <option value="disponibile">Disponibile</option>
                            <option value="adozione a distanza">Adozione a distanza</option>
                        </select>
                    </div>
                </div>
            }
        >
            <Head title="I nostri cavalli" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="d-flex flex-wrap" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                {filteredHorses.map((horse) => (
                                    <div key={horse.id} className="wcard card my-3 mx-3">
                                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                            <img src={horse.img} alt={horse.name} className="w-full h-48 object-cover" />
                                            <div className="p-4 text-center">
                                                <h4 className="font-bold text-lg">{horse.name}</h4>
                                                <p className="text-gray-600">{horse.age}</p>
                                                <a className="btn buttonCustom text-center mt-2" href={route('horses.show', { horseId: horse.id })}>Dettagli</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
