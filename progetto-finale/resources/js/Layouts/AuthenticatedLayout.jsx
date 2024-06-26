import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="glass-effect-nav border-b border-gray-100 sticky-top shadow-nav">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <img src="/img/logo2.png" className="block h-9 w-auto fill-current text-gray-800 logonav" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink className="h5" href={route('Ricollocamento')} active={route().current('Ricollocamento')}>
                                    Ricollocamento
                                </NavLink>
                                <NavLink className="h5" href={route('Adozioni')} active={route().current('Adozioni')}>
                                    Adozioni
                                </NavLink>
                                <NavLink className="h5" href={route('horses.index')} active={route().current('horses.index')}>
                                    Cavalli
                                </NavLink>
                                <NavLink className="h5" href={route('contacts')} active={route().current('contacts')}>
                                    Contatti
                                </NavLink>

                                {user && (
                                    <>
                                        <NavLink className="h5" href={route('dashboard')} active={route().current('dashboard')}>
                                            Dashboard
                                        </NavLink>
                                       
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            {user ? (
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link className='text-black' href={route('profile.edit')}>
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            ) : (
                                <div className="flex space-x-4">
                                    <NavLink className="h6" href={route('login')}>
                                        Log In
                                    </NavLink>
                                    <NavLink className="h6" href={route('register')}>
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((prev) => !prev)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        {user && (
                            <>
                                <ResponsiveNavLink className="h6" href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink className="h6" href={route('adoptionforms.index')} active={route().current('adoptionforms.index')}>
                                    Adoption Forms
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            {user && (
                                <>
                                    <div className="font-medium text-base text-gray-800">{user.name}</div>
                                    <div className="font-medium text-sm text-gray-500">{user.email}</div>
                                </>
                            )}
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink className="h6" href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink className="h6" method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header style={{ backgroundColor: '#F29230' }} className=" shadow">
                    <div className="  sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>

            <footer className="bg-gray-800 text-white py-8 footercustom">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">La nostra missione</h3>
                            <p>Offriamo una seconda possibilità ai cavalli a fine carriera, aiutandoli a trovare nuove famiglie e nuove prospettive di vita.</p>
                        </div>
                        <div>
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-gray-400 text-white" aria-label="Facebook">
                        <i className="bi bi-facebook fa-lg"></i>
                    </a>
                    <a href="https://twitter.com" className="hover:text-gray-400 text-white" aria-label="Twitter">
                        <i className="bi bi-twitter fa-lg"></i>
                    </a>
                    <a href="https://instagram.com" className="hover:text-gray-400 text-white" aria-label="Instagram">
                        <i className="bi bi-instagram fa-lg"></i>
                    </a>
                    <a href="https://youtube.com" className="hover:text-gray-400 text-white" aria-label="YouTube">
                        <i className="bi bi-youtube fa-lg"></i>
                    </a>
                </div>
            </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
                            <p>
                                EquiRescue ODV<br />
                                Via dei Prati, 123<br />
                                00000 Città, Paese<br />
                                <br />
                                Telefono: +39 123 456 7890<br />
                                Email: equirescue@equirescue.com
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p>&copy; 2024 EquiRescue ODV. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
