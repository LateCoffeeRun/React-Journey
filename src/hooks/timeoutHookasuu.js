import {useEffect, useRef} from "react";

export function useTimeoutHookasuu(callback, delay) {
    const savedCallback = useRef();

    // Update the saved callback whenever it changes
    useEffect(() => {
        console.log("Callback updated:", callback);
        savedCallback.current = callback;
    }, [callback]);

    // Set up the timeout when delay changes
    useEffect(() => {
        if (delay == null) {
            console.log("Delay is null, skipping timeout");
            return;
        }

        console.log(`Setting timeout with delay: ${delay}ms`);
        const id = setTimeout(() => {
            console.log("Timeout fired, calling callback");
            if (typeof savedCallback.current === "function") {
                savedCallback.current();
            }
        }, delay);

        // Clean up the timeout on delay change or unmount
        return () => {
            console.log("Clearing timeout");
            clearTimeout(id);
        };
    }, [delay]);
}