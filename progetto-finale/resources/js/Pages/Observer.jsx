import React, { useRef, useEffect, useState } from 'react';

const Observer = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Percentuale di visibilità necessaria per attivare l'animazione
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={isVisible ? 'visible' : 'hidden'}>
            {children}
        </div>
    );
};

export default Observer;
