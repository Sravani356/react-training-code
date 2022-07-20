import { useState } from 'react';
import Child1 from './child1';

function Parent1() {
    const [message, setMessage] = useState('')
    const handleRequest = (request) => {
        if(request.includes("car")) {
            setMessage("No");
        }
    };

    return (
        <div  data-testid="test1">
            <h1>Parent</h1>
            <p data-testid="message">{message}</p>
        <Child1 onRequest={handleRequest}/>
        </div>
    );
}

export default Parent1;