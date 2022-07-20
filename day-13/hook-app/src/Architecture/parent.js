import {useState} from "react";
import Child from "./child";

function Parent () {
    const [words, setWords] = useState("")

    const handleClick = () => {
        setWords("did you hear something?");
    };

    return (
        <div>
            <h1>Parent</h1>
            <button onClick={handleClick}>Ask</button>
        <Child hears = {words} />
        </div>
    );
    
}

export default Parent;