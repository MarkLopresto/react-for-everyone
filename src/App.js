import React from 'react'
import PropTypes from 'prop-types' // updated way since React v15.5
import { Counter } from './components/Counter'
import { Accordian } from './components/Accordian';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Counter />
      <Accordian />
    </div>
  );
}

function HelloWorld({ greeting = "Hi", name = "Mark", day = "Saturday" }) { // de-structure props {}
  return (
  <div>
    <h1>{greeting} {name}</h1>
    <h3>Today is {day}</h3>
  </div>
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
  day: PropTypes.string
}

export default App;
