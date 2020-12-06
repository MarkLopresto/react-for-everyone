import React, { useState } from 'react'

export function Accordian() {
  const [isToggled, setIsToggled] = useState(false)

  // option 1
  // const showMe = isToggled ? (<h3>Show Me</h3>) : null

  return (
    <div>
      {/* Three different ways */}
      {/* {showMe} */}

      {/* { isToggled ?
        <h3>Show Me</h3>
        :null
      } */}

      {/* Best way if only one outcome */}
      { isToggled &&
        <h3>Show Me</h3>
      }
      <button onClick={ () => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  )
}
