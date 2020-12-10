import React, { useState } from 'react'

export function Input() {

  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      {inputValue &&
        <h3>{inputValue}</h3>
      }
      <input
      value={inputValue}
      // basic
      // onChange={ (event) => setInputValue(event.target.value) } />

      onChange={ (event) => {
        if(!event.target.value.includes("0")) {
          setInputValue(event.target.value)
        }
      }} />
    </div>
  )
}
