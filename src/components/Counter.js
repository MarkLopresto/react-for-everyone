import React, { useState } from 'react'; // useState is a React Hook ( use... )

export function Counter() {

  // const [count, setCount] = useState(defaultState);
  const [count, setCount] = useState(0); // value ( count ) of state and updater ( setCount ) of state

  return (
    <div>
      <h3>{count}</h3>
      {/* {JavaScript expression} */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
