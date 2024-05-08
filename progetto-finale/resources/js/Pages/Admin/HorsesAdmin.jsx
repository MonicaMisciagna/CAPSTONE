import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';

const Dashboard = ({ horses, auth }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('all'); 

    const handleDelete = async (horseId) => {
        if (confirm('Sei sicuro di voler cancellare questo cavallo?')) {
            await Inertia.delete(route('horses.destroy', horseId));
        }
    };

    const filteredHorses = horses.filter((horse) => {
        const matchesSearchTerm = horse.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAdoptionStatus = adoptionStatus === 'all' || horse.adoption_status === adoptionStatus;
        return matchesSearchTerm && matchesAdoptionStatus;
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Cavalli</h2>
                                <Link
                                    href={route('horses.create')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                                >
                                    Aggiungi cavallo
                                </Link>
                            </div>


                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Cerca cavallo per nome"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            
                            <div className="mb-4">
                                <label htmlFor="adoption-status" className="block text-gray-700 mb-2">Stato di adozione:</label>
                                <select
                                    id="adoption-status"
                                    value={adoptionStatus}
                                    onChange={(e) => setAdoptionStatus(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="all">Tutti gli stati</option>
                                    <option value="adottato">Adottato</option>
                                    <option value="disponibile">Disponibile</option>
                                    <option value="adozione a distanza">adozione a distanza</option>
                                </select>
                            </div>

                         
                            <div className="divide-y divide-gray-200">
                                {filteredHorses.map((horse) => (
                                    <div key={horse.id} className="py-4 flex justify-between items-center ">
                                        <div className="flex items-center">
                                            <p className="text-lg font-medium text-gray-900">{horse.name}</p>
                                        </div>
                                        <div className="flex space-x-4">
                                            <button
                                                onClick={() => handleDelete(horse.id)}
                                                className="btn buttonCustom"
                                            >
                                                Elimina
                                            </button>
                                            <Link
                                                href={route('horses.edit', horse.id)}
                                                className="btn buttonCustom"
                                            >
                                                Modifica
                                            </Link>
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
};

export default Dashboard;
