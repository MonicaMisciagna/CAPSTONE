import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Users({ users, auth }) {
    const [selectedRoles, setSelectedRoles] = useState({});

    const handleRoleChange = (userId) => {
        Inertia.put(`/users/${userId}/updateRole`, {
            role: selectedRoles[userId],
        }).then(() => {
        });
    };

    const handleDeleteUser = (userId) => {
        if (confirm('Sei sicuro di voler eliminare questo utente?')) {
            Inertia.delete(`/users/${userId}`).then(() => {
           });
        }
    };

    const hasMultipleAdmins = users.filter(user => user.role === 'admin').length > 1;

    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Utenti</h2>
                        {users.map(user => (
                            <div key={user.id} className="border-b border-gray-200 py-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-gray-800">{user.name}</p>
                                    <select
                                        className="ml-4 bg-gray-100 border border-gray-300 rounded-md px-5"
                                        value={selectedRoles[user.id] || user.role}
                                        onChange={e => setSelectedRoles({ ...selectedRoles, [user.id]: e.target.value })}
                                        hidden={!(hasMultipleAdmins || user.role !== 'admin')}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                    <div className="ml-4 flex items-center space-x-4">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            onClick={() => handleRoleChange(user.id)}
                                            hidden={!hasMultipleAdmins && user.role === 'admin'}
                                        >
                                            Cambia ruolo
                                        </button>
                                        {user.role === 'user' && (
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                                onClick={() => handleDeleteUser(user.id)}
                                            >
                                                Elimina utente
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
