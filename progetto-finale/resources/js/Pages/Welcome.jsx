import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function Welcome({ auth, horses }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Welcome" />
            <div className=''>
              
                <div className="hero-section">
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-5 herotext d-flex flex-column align-items-center pb-5 wcard'>
                            <img src='/img/logo1.png' className='logo' alt="EquiRescue ODV Logo" />
                            <h1 className="title text-center text-black">EquiRescue ODV</h1>
                            <h2 className="subtitle text-center">Adozioni e ricollocamento di cavalli a fine carriera.</h2>
                            <a href='#chefacciamo' className='mt-3 btn buttonCustom wcard'>Scopri di più</a>
                        </div>
                        <div className='col-6'>
                            <div className='cavallohero float-end wcard'>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='welcome-page' id='chefacciamo'>
                    <div className='container'>
                        <h3 className='text-center pb-5 text-white font-bold'>Cosa facciamo</h3>
                        <div className='cardswelcome d-flex justify-content-evenly'>
                            <div className='cardswelcome1 wcard'>
                                <div className="max-w-sm overflow-hidden shadow-lg bgcard">
                                    <div className="px-6 py-4 text-center">
                                        <p className="font-bold text-xl mb-2 textcard">Ricollocamento cavalli</p>
                                        <p className="text-base">Sei proprietario di un equino e vuoi assicurargli un futuro sereno?</p>
                                        <img src='/img/pngegg10.png' className='rounded-pill img2' alt="..." />
                                        <a href={route('Ricollocamento')} className='mt-3 btn buttonCustom'>Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div className='cardswelcome2 wcard'>
                                <div className="max-w-sm overflow-hidden shadow-lg bgcard">
                                    <div className="px-6 py-4 text-center">
                                        <p className="font-bold text-xl mb-2 textcard">Adozione cavalli</p>
                                        <p className="text-gray-700 text-base">Sei un amante degli animali e stai cercando un compagno di vita?</p>
                                        <img src='/img/pngegg10.png' className='rounded-pill img1' alt="..." />
                                        <a href={route('horses.index')} className='text-center mt-3 btn buttonCustom'>Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div className='cardswelcome2 wcard'>
                                <div className="max-w-sm overflow-hidden shadow-lg bgcard">
                                    <div className="px-6 py-4 text-center">
                                        <p className="font-bold text-xl mb-2 textcard">Donazioni</p>
                                        <p className="text-gray-700 text-base">Vuoi sostenere la nostra missione o pensi ad un'adozione a distanza?</p>
                                        <img src='/img/pngegg10.png' className='rounded-pill imgfin' alt="..." />
                                        <a href={route('donations.index')} className='text-center mt-3 btn buttonCustom'>Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center' >
                  <div className=' '>
                    
                        <p className='text-center font-bold text-xl mt-5 mb-5' style={{color:"#F27001"}}> Dona il 5x1000 per aiutare i cavalli in difficoltà
                       </p>
                      <p className='text-center'> Il 5x1000 è un modo semplice per sostenere la nostra missione di adottare e ricollocare cavalli bisognosi. Basta indicare il nostro codice fiscale nella tua dichiarazione dei redditi per destinare il 5x1000 alla nostra organizzazione.</p>
                      <p className='text-center text-xl'style={{color:"#F27001"}}> Codice Fiscale: 12345678</p></div>
                 
                </div>
                <div className="welcome-page">
                    <h3 className="text-center pb-5 text-white font-bold">Cavalli disponibili all'adozione</h3>
                    
                    {horses && Array.isArray(horses) && (
                        <Slider {...settings}>
                            {horses.map((horse) => (
                                <div key={horse.id} className="p-4 wcard">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                        <img src={horse.img} alt={horse.name} className="w-full h-48 object-cover" />
                                        <div className="p-4 text-center">
                                            <h4 className="font-bold text-lg">{horse.name}</h4>
                                            <p className="text-gray-600">{horse.age}</p>
                                            <a href={route('horses.show', horse.id)} className="btn buttonCustom mt-2">Scopri di più</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
