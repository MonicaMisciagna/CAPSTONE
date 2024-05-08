import React from 'react';

function Error({ error }) {
    return (
        <div className="container">
            <h1>Errore</h1>
            <p>Si è verificato un errore durante l'elaborazione della tua richiesta.</p>
            {error && <p>Dettagli dell'errore: {error}</p>}
        </div>
    );
}

export default Error;
