import { useState } from "react";

const  counterStyle = {
    display: 'flex',
    gap: '1rem',
};
const  buttonStyle = {
    padding: '1rem',
    fonrSize: '1rem',
};
const  numberStyle = {
    padding: '1rem',
    fonrSize: '2rem',
    lineHeight: '1rem',
    fonWeight: 'bold',
};
export function Counter() {
    const [count, setCount] = useState(0);

    function minus1() {
        setCount(count - 1);
    }
    function plus1() {
        setCount(count + 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <div style={counterStyle}>
            <button onClick={() => setCount(count - 3)} style={buttonStyle}>-3</button>
            <button onClick={minus1} style={buttonStyle}>-</button>
            <div style={numberStyle}>{count}</div>
            <button onClick={plus1} style={buttonStyle}>+</button>
            <button onClick={() => setCount(count + 3)} style={buttonStyle}>+3</button>
            <button onClick={reset} style={buttonStyle}>reset</button>
        </div>
    )
}