import { useEffect, useState } from 'react';

/
 * Custom hook for managing animations in the CleanSSR website.
 * This hook provides functionality to animate elements based on scroll position and other triggers.
 * 
 * @returns {Object} - Contains methods and state for managing animations
 */
export const useAnimation = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>('fade-out');

    /
     * Function to toggle visibility and apply animation classes.
     * This function can be triggered by scrolling or other events.
     * 
     * @param {boolean} visible - Determines if the element should be visible
     */
    const toggleVisibility = (visible: boolean) => {
        setIsVisible(visible);
        setAnimationClass(visible ? 'fade-in' : 'fade-out');
    };

    /
     * Effect hook to listen for scroll events and trigger animations accordingly.
     * This simulates a technology-driven user experience for CleanSSR.
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 200; // Change as needed to customize when the animation should trigger

            if (scrollTop > threshold) {
                toggleVisibility(true);
            } else {
                toggleVisibility(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        isVisible,
        animationClass,
        toggleVisibility,
    };
};