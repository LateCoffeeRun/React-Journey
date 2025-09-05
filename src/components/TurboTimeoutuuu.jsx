import {useTimeoutHookasuu} from "../hooks/timeoutHookasuu.js";
import {useCallback, useState} from "react";

export default function TurboTimeoutuuu() {
    const [message, setMessage] = useState("Waiting...");
    const [delay, setDelay] = useState(2000);

    // Memoize the callback to prevent unnecessary updates
    const timeoutCallback = useCallback(() => {
        console.log("Callback executed, updating message");
        setMessage("Timeout finished!");
    }, []); // Empty deps since setMessage is stable

    useTimeoutHookasuu(timeoutCallback, delay);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => setDelay(500)}>Change delay to 0.5s</button>
            <button onClick={() => setDelay(null)}>Cancel timeout</button>
            <button onClick={() => setDelay(1000)}>Reset to 1s</button>
            <hr/>
        </div>
    );
}