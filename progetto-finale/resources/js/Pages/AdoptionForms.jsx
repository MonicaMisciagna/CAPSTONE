import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AdoptionForm = ({ horse, userId, auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        user_id: userId,
        horse_id: horse ? horse.id : '',
        adoption_status: 'Pending',
       
        last_name: '',
        birth_date: '',
        address_line1: '',
        city: '',
        province: '',
        facility_postal_code: '',
        phone: '',
        email: '',
        num_equids_hosting: '',
        facility_address_line1: '',
        facility_city: '',
        facility_province: '',
        facility_postal_code: '',
        daytime_and_nighttime_housing: '',
        codice_stalla: '',
        caretaker_info: '',
        veterinarian_info: '',
        farrier_info: '',
    });
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!data.first_name) {
            console.error('First name is required.');
            return;
        }
        
        post(`/adoptionforms/store/${data.horse_id}`, {
            data,
            onSuccess: () => {
                console.log('Form submitted successfully');
            },
            onError: (errors) => {
                console.error('Form submission error:', errors);
            }
        });
    };
    

    

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Adoption Forms" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-semibold mb-4">Compila il modulo di adozione</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                           <input type="hidden" name="user_id" value={data.user_id} readOnly />
                                <input type="hidden" name="horse_id" value={data.horse_id} readOnly />

                                <div>
                                    <label htmlFor="first_name" className="block text-gray-700">Nome</label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.first_name && <div className="text-red-500">{errors.first_name}</div>}
                                </div>

                                <div>
                                    <label htmlFor="last_name" className="block text-gray-700">Cognome</label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.last_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.last_name && <div className="text-red-500">{errors.last_name}</div>}
                                </div>

                                <div>
                                    <label htmlFor="birth_date" className="block text-gray-700">Data di nascita</label>
                                    <input
                                        id="birth_date"
                                        type="date"
                                        name="birth_date"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.birth_date}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.birth_date && <div className="text-red-500">{errors.birth_date}</div>}
                                </div>

                                <div>
                                    <label htmlFor="address_line1" className="block text-gray-700">Indirizzo</label>
                                    <input
                                        id="address_line1"
                                        type="text"
                                        name="address_line1"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.address_line1}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.address_line1 && <div className="text-red-500">{errors.address_line1}</div>}
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-gray-700">Città</label>
                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.city}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.city && <div className="text-red-500">{errors.city}</div>}
                                </div>

                                <div>
                                    <label htmlFor="province" className="block text-gray-700">Provincia</label>
                                    <input
                                        id="province"
                                        type="text"
                                        name="province"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.province}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.province && <div className="text-red-500">{errors.province}</div>}
                                </div>

                                <div>
                                    <label htmlFor="facility_postal_code" className="block text-gray-700">CAP</label>
                                    <input
                                        id="facility_postal_code"
                                        type="text"
                                        name="facility_postal_code"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.facility_postal_code}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.facility_postal_code && <div className="text-red-500">{errors.facility_postal_code}</div>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700">Telefono</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <div className="text-red-500">{errors.phone}</div>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                </div>

                                <div>
                                    <label htmlFor="num_equids_hosting" className="block text-gray-700">Numero di equidi ospitati</label>
                                    <input
                                        id="num_equids_hosting"
                                        type="number"
                                        name="num_equids_hosting"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.num_equids_hosting}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.num_equids_hosting && <div className="text-red-500">{errors.num_equids_hosting}</div>}
                                </div>

                                <div>
                                    <label htmlFor="facility_address_line1" className="block text-gray-700">Indirizzo della struttura</label>
                                    <input
                                        id="facility_address_line1"
                                        type="text"
                                        name="facility_address_line1"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.facility_address_line1}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.facility_address_line1 && <div className="text-red-500">{errors.facility_address_line1}</div>}
                                </div>

                                 <div>
                                    <label htmlFor="facility_city" className="block text-gray-700">Città della struttura</label>
                                    <input
                                        id="facility_city"
                                        type="text"
                                        name="facility_city"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.facility_city}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.facility_city && <div className="text-red-500">{errors.facility_city}</div>}
                                </div>

                                <div>
                                    <label htmlFor="facility_province" className="block text-gray-700">Provincia della struttura</label>
                                    <input
                                        id="facility_province"
                                        type="text"
                                        name="facility_province"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.facility_province}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.facility_province && <div className="text-red-500">{errors.facility_province}</div>}
                                </div>

                                <div>
                                    <label htmlFor="facility_postal_code" className="block text-gray-700">CAP della struttura</label>
                                    <input
                                        id="facility_postal_code"
                                        type="text"
                                        name="facility_postal_code"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.facility_postal_code}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.facility_postal_code && <div className="text-red-500">{errors.facility_postal_code}</div>}
                                </div>

                                <div>
                                    <label htmlFor="daytime_and_nighttime_housing" className="block text-gray-700">Gestione diurna e notturna</label>
                                    <textarea
                                        id="daytime_and_nighttime_housing"
                                        name="daytime_and_nighttime_housing"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.daytime_and_nighttime_housing}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.daytime_and_nighttime_housing && <div className="text-red-500">{errors.daytime_and_nighttime_housing}</div>}
                                </div>

                                <div>
                                    <label htmlFor="codice_stalla" className="block text-gray-700">Codice stalla</label>
                                    <input
                                        id="codice_stalla"
                                        type="text"
                                        name="codice_stalla"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.codice_stalla}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.codice_stalla && <div className="text-red-500">{errors.codice_stalla}</div>}
                                </div>

                                <div>
                                    <label htmlFor="caretaker_info" className="block text-gray-700">Informazioni sul custode</label>
                                    <textarea
                                        id="caretaker_info"
                                        name="caretaker_info"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.caretaker_info}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.caretaker_info && <div className="text-red-500">{errors.caretaker_info}</div>}
                                </div>

                                <div>
                                    <label htmlFor="veterinarian_info" className="block text-gray-700">Informazioni sul veterinario</label>
                                    <textarea
                                        id="veterinarian_info"
                                        name="veterinarian_info"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.veterinarian_info}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.veterinarian_info && <div className="text-red-500">{errors.veterinarian_info}</div>}
                                </div>

                                <div>
                                    <label htmlFor="farrier_info" className="block text-gray-700">Informazioni sul maniscalco</label>
                                    <textarea
                                        id="farrier_info"
                                        name="farrier_info"
                                        className="block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 py-2"
                                        value={data.farrier_info}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.farrier_info && <div className="text-red-500">{errors.farrier_info}</div>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        disabled={processing}
                                    >
                                        Invia Richiesta di Adozione
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

export default AdoptionForm;
