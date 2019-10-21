import React from 'react';
import './App.css';
import CounterGroup from "./components/CounterGroup/CounterGroup";

function App() {
  return (
    <div className="App">
      <CounterGroup startingNumberOfCounters={3}/>
    </div>
  );
}

export default App;
