
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  
const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Count </button>
    </>
  );
}

export default Counter;


