import {useCustomuHookasu} from "../hooks/customuHookasu.js";
import {Button, Stack} from "@mui/material";

export default function RamenuRestourantu() {
    const {makeRamen, eatRamen} = useCustomuHookasu()
    return (
        <div>
            <h2>Ramenu restourantuuuu</h2>
            <h3>Check console for output</h3>

            <Stack spacing={1} direction="row">
                <Button variant="outlined" size="small" onClick={makeRamen}>Make Ramenuuu</Button>
                <Button variant="outlined" size="small" onClick={eatRamen}>Eat Ramenuuu</Button>
            </Stack>
            <hr/>
        </div>
    )
}