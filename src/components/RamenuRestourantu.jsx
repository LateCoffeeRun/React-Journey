import {useCustomuHookasu} from "../hooks/customuHookasu.js";

export default function RamenuRestourantu() {
    const {makeRamen, eatRamen} = useCustomuHookasu()
    return (
        <div>
            <h2>Ramenu restourantuuuu</h2>

            <button onClick={makeRamen}>Make Ramenuuu</button>
            <button onClick={eatRamen}>Eat Ramenuuu</button>
            <hr/>
        </div>
    )
}