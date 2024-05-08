import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const EditHorse = ({ horse, auth }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: horse.name,
        breed: horse.breed,
        age: horse.age,
        img: horse.img,
        description: horse.description,
        health_status: horse.health_status,
        location: horse.location,
        suitable_for: horse.suitable_for,
        adoption_status: horse.adoption_status,
        sex: horse.sex,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('horses.update', horse.id), data);
    };

    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Modifica Cavallo" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                        autoFocus
                                    />
                                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                            
                                <div className="mb-4">
                                    <label htmlFor="breed" className="block text-gray-700 mb-2">Razza</label>
                                    <input
                                        id="breed"
                                        type="text"
                                        name="breed"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.breed}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.breed && <div className="text-red-500">{errors.breed}</div>}
                                </div>
                              
                                <div className="mb-4">
                                    <label htmlFor="age" className="block text-gray-700 mb-2">Anno di nascita</label>
                                    <input
                                        id="age"
                                        type="number"
                                        name="age"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.age}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.age && <div className="text-red-500">{errors.age}</div>}
                                </div>
                               
                                <div className="mb-4">
                                    <label htmlFor="img" className="block text-gray-700 mb-2">Immagine</label>
                                    <input
                                        id="img"
                                        type="text"
                                        name="img"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.img}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.img && <div className="text-red-500">{errors.img}</div>}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="description" className="block text-gray-700 mb-2">Descrizione</label>
                                    <input
                                        id="description"
                                        type="text"
                                        name="description"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.description}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="health_status" className="block text-gray-700 mb-2">Stato di salute</label>
                                    <select
                                        id="health_status"
                                        name="health_status"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.health_status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleziona stato di salute</option>
                                        <option value="eccellente">Eccellente</option>
                                        <option value="buono">Buono</option>
                                        <option value="precario">Precario</option>
                                    </select>
                                    {errors.health_status && <div className="text-red-500">{errors.health_status}</div>}
                                </div>
                               
                                <div className="mb-4">
                                    <label htmlFor="location" className="block text-gray-700 mb-2">Località</label>
                                    <input
                                        id="location"
                                        type="text"
                                        name="location"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.location}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.location && <div className="text-red-500">{errors.location}</div>}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="suitable_for" className="block text-gray-700 mb-2">Adatto per</label>
                                    <input
                                        id="suitable_for"
                                        type="text"
                                        name="suitable_for"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.suitable_for}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.suitable_for && <div className="text-red-500">{errors.suitable_for}</div>}
                                </div>
                          
                                <div className="mb-4">
                                    <label htmlFor="adoption_status" className="block text-gray-700 mb-2">Stato di adozione</label>
                                    <select
                                        id="adoption_status"
                                        name="adoption_status"
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
                                        value={data.adoption_status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleziona stato di adozione</option>
                                        <option value="disponibile">Disponibile</option>
                                        <option value="adozione a distanza">Adozione a distanza</option>
                                        <option value="adottato">Adottato</option>
                                    </select>
                                    {errors.adoption_status && <div className="text-red-500">{errors.adoption_status}</div>}
                                </div>
                               
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        Salva le modifiche
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditHorse;
