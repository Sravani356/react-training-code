import { useState } from "react";


const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const decrementCounter = () => {
    setCounter((counter) => counter - 1);
  };

    

  function clearResult(){
    setCounter(0);
  }

  return (
    <>
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter">{counter}</p>
      <button data-testid="decrement" onClick={decrementCounter}>
-
      </button>
      <button data-testid="resetButton" onClick={clearResult} >Reset</button>
    </>
  );
};

export default Counter;
