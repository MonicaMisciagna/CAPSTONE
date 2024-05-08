import React, { useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Contacts({ auth }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState({
        success: false,
        error: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/contacts', formData);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
    
            setSubmissionStatus({
                success: true,
                error: null,
            });
    
        } catch (error) {
           const errorMessage = error.response ? error.response.data.error : 'An error occurred';
            
            setSubmissionStatus({
                success: false,
                error: errorMessage,
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                   
                    <section className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Contattaci</h3>
                        <p>Telefono: +39 123 456 7890</p>
                        <p>Email: <a href="mailto:equirescue@equirescue.com" className="text-success underline">equirescue@equirescue.com</a></p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 underline">Modulo di Contatto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Il tuo nome"
                                    required
                                    className="form-input w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="La tua email"
                                    required
                                    className="form-input w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Il tuo messaggio"
                                    required
                                    className="form-textarea w-full p-2 border border-gray-300 rounded"
                                    rows="5"
                                />
                            </div>
                            <button type="submit" className="btn buttonCustom">
                                Invia messaggio
                            </button>

                            {submissionStatus.success && (
                                <p className="text-green-500 mt-2">Messaggio inviato con successo!</p>
                            )}
                            {submissionStatus.error && (
                                <p className="text-red-500 mt-2">Errore nell'invio del messaggio: {submissionStatus.error}</p>
                            )}
                        </form>
                    </section>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
