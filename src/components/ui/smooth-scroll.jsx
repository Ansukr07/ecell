import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Simplified smooth scroll implementation
// For a robust solution, one might use Lenis or standard CSS scroll-behavior
export const SmoothScroll = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="scroll-smooth">
            {children}
        </div>
    );
};
