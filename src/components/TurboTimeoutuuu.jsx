import {useTimeoutHookasuu} from "../hooks/timeoutHookasuu.js";
import {useCallback, useState} from "react";
import {Button, Stack} from "@mui/material";

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
            <Stack spacing={1} direction="row">
                <Button variant="outlined" size="small" onClick={() => setDelay(500)}>Change delay to 0.5s</Button>
                <Button variant="outlined" size="small" onClick={() => setDelay(null)}>Cancel timeout</Button>
                <Button variant="outlined" size="small" onClick={() => setDelay(1000)}>Reset to 1s</Button>
            </Stack>
            <hr/>
        </div>
    );
}