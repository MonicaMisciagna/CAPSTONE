import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Dashboard({ auth, horses, users, adoptionForms }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
           
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 d-flex justify-content-between">
                    
                    <div>
                    <div ><a className='cardadozioni' href={route('users.index')} >
    Vai alla gestione utenti
  </a></div>
  
</div>

<div >
  
  <a className='cardadozioni' href={route('horses.index')} >
    Vai alla gestione cavalli
  </a>
</div>

<div >
  
  <a className='cardadozioni' href={route('adoptionForms.index')} >
    Vai alla gestione adozioni
  </a>
</div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
