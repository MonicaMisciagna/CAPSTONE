import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

const ShowAdoptionForm = ({ auth, adoptionForm, horses }) => {
    const { errors } = usePage().props;
    const [processing, setProcessing] = useState(false);
    const adoptionFormId = adoptionForm.id;
    const horse = horses.find(horse => horse.id === adoptionForm.horse_id);

    const handleApprove = async () => {
        setProcessing(true);
        try {
            await Inertia.put(`/DashboardAdmin/adoptionforms/${adoptionFormId}/update`, {
                adoption_status: 'Approved',
            });
        } catch (error) {
            console.error('Errore durante l\'approvazione:', error);
            alert('Errore durante l\'approvazione. Riprova più tardi.');
        } finally {
            setProcessing(false);
        }
    };

       const handleReject = async () => {
        setProcessing(true);
        try {
            await Inertia.put(`/DashboardAdmin/adoptionforms/${adoptionFormId}/update`, {
                adoption_status: 'Rejected',
            });
        } catch (error) {
            console.error('Errore durante il rifiuto:', error);
            alert('Errore durante il rifiuto. Riprova più tardi.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dettagli Adozione" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Dettagli Adozione</h2>
                            <p className="mb-2"><strong>Utente:</strong> {adoptionForm.first_name} {adoptionForm.last_name}</p>
                            <p className="mb-2"><strong>Data di nascita:</strong> {adoptionForm.birth_date}</p>
                            <p className="mb-2"><strong>Cavallo:</strong> {horse ? horse.name : 'Cavallo non trovato'}</p>
                            <p className="mb-2"><strong>Città:</strong> {adoptionForm.city}</p>
                            <p className="mb-2"><strong>Telefono:</strong> {adoptionForm.phone}</p>
                            <p className="mb-2"><strong>Email:</strong> {adoptionForm.email}</p>
                            <p className="mb-4"><strong>Stato Adozione:</strong> {adoptionForm.adoption_status}</p>
                        </div>

                        <div className="flex justify-end p-6 space-x-4">
                            <button
                                onClick={handleApprove}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                disabled={processing}
                            >
                                Approva Adozione
                            </button>

                            <button
                                onClick={handleReject}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                disabled={processing}
                            >
                                Rifiuta Adozione
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link href={route('dashboard')} className="text-blue-500 hover:underline">
                            Torna alla Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowAdoptionForm;
