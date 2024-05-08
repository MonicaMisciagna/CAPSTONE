import React from 'react';
import { usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const AdoptionFormsIndex = () => {
    const { auth, adoptionForms, horses } = usePage().props;
const horseMap = {};
    horses.forEach(horse => {
        horseMap[horse.id] = horse.name;
    });

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Adoption Forms" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-semibold mb-4">Le tue richieste di adozione</h1>
                            <ul className="space-y-4">
                                {adoptionForms.map(form => (
                                    <li key={form.id} className="bg-gray-100 p-4 rounded-lg">
                                        <p><strong>Cavallo:</strong> {horseMap[form.horse_id]}</p>
                                        <p><strong>Stato della richiesta:</strong> {form.adoption_status}</p>
                                        <Link
                                            href={route('adoptionforms.show', form.id)}
                                            className="text-blue-500 hover:underline py-2 px-4 rounded" 
                                        >
                                            Dettagli
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href={route('dashboard')}
                                    className="text-blue-500 hover:underline"
                                >
                                    Torna alla Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AdoptionFormsIndex;
