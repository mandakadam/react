import React from 'react';
import './App.css';
import CalculatorFunctionWithHooks from './components/CalculatorFunctionWithHooks';
import CalculatorClassWithState from './components/CalculatorClassWithState';

function App() {
  return (
    <div className="App">
      With Functional Components
      <CalculatorFunctionWithHooks />
      <hr />

      With Class Components
      <CalculatorClassWithState />
    </div>
  );
}

export default App;
