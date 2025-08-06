import { useEffect } from 'react';

export const useEmit = <T = any>(emitName: string, data?: T) => {
    return () => {
        const event = new CustomEvent(emitName, {
            detail: data,
        });
        window.dispatchEvent(event);
    };
};
