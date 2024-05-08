import { usePage } from '@inertiajs/react';

const Layout = ({ children }) => {
    const { isLoading } = usePage().props;

    return (
        <div>
            
            {isLoading && <div className="loader"><p class="text">
    EquiRescue
  </p></div>}

            
            <main>
                {children}
            </main>

           
        </div>
    );
};

export default Layout;
