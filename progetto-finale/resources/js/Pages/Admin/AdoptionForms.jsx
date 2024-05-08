import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, adoptionForms, horses }) {
   const [searchLocation, setSearchLocation] = useState('');
    const [searchHorseName, setSearchHorseName] = useState('');
    const [searchAdopterName, setSearchAdopterName] = useState('');

    const horseMap = {};
    horses.forEach(horse => {
        horseMap[horse.id] = horse;
    });

    const filteredForms = adoptionForms.filter((form) => {
        const location = form.city ? form.city.toLowerCase() : '';
        const horse = horseMap[form.horse_id];
        const horseName = horse ? horse.name.toLowerCase() : '';
        const adopterName = form.first_name ? form.first_name.toLowerCase() : '';

        return (
            location.includes(searchLocation.toLowerCase()) &&
            horseName.includes(searchHorseName.toLowerCase()) &&
            adopterName.includes(searchAdopterName.toLowerCase())
        );
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Moduli di adozione</h2>

                        
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Cerca per località"
                                value={searchLocation}
                                onChange={(e) => setSearchLocation(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Cerca per nome del cavallo"
                                value={searchHorseName}
                                onChange={(e) => setSearchHorseName(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Cerca per nome dell'adottante"
                                value={searchAdopterName}
                                onChange={(e) => setSearchAdopterName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        
                        <div className="divide-y divide-gray-200">
                            {filteredForms.map((form) => (
                                <div key={form.id} className="py-4 flex justify-between items-center">
                                    <div>
                                        <p><strong>Adottante:</strong> {form.first_name} {form.last_name}</p>
                                        
                                        <p><strong>Cavallo:</strong> {horseMap[form.horse_id]?.name}</p>
                                        <p><strong>Località:</strong> {form.city}</p>
                                        <p><strong>Stato di adozione:</strong> {form.adoption_status}</p>
                                    </div>
                                    <Link
                                        href={route('adoptionforms.show', form.id)}
                                        className="buttonCustom py-2 px-4 rounded"
                                    >
                                        Dettagli
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
