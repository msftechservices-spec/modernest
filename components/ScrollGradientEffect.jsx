"use client";
import { useEffect } from 'react';

export default function ScrollGradientEffect() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;

            // Remove all scroll classes
            document.body.classList.remove('scroll-top', 'scroll-middle', 'scroll-bottom');

            // Add appropriate class based on scroll position
            if (scrollPercent < 0.3) {
                document.body.classList.add('scroll-top');
            } else if (scrollPercent < 0.7) {
                document.body.classList.add('scroll-middle');
            } else {
                document.body.classList.add('scroll-bottom');
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial call
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null; // This component doesn't render anything
}