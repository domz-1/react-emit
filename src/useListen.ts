import { useEffect } from 'react';

export const useListen = <T = any>(
    listenName: string,
    callback: (data: T) => void
) => {
    useEffect(() => {
        const eventHandler = (event: CustomEvent<T>) => {
            callback(event.detail);
        };
        window.addEventListener(listenName, eventHandler as EventListener);
        // Cleanup listener when component unmounts
        return () => {
            window.removeEventListener(
                listenName,
                eventHandler as EventListener
            );
        };
    }, [listenName, callback]);
};
