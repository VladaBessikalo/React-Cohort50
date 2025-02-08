import { useEffect, useState, useDebugValue } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useDebugValue(
        `width: ${windowSize.width}px, height: ${windowSize.height}px`
    );

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize;
