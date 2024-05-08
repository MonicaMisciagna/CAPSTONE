import AdoptionFormsIndex from '@/Pages/AdoptionFormsIndex';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
           
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 d-flex justify-content-between">
                <div className=" overflow-hidden  sm:rounded-lg ">
                    
  




<div >
  
  <a className='cardadozioni' href={route('adoptionforms.index')} >
    Vai alla gestione adozioni
  </a>
</div>

                </div>
             </div>  
            </div>
        </AuthenticatedLayout>
    );
}
