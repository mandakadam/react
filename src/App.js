import React from 'react';
import './App.css';
import CalculatorFunctionWithHooks from './components/CalculatorFunctionWithHooks';
import CalculatorClassWithState from './components/CalculatorClassWithState';

function App() {
  return (
    <div className="App">
      <CalculatorFunctionWithHooks />
      <hr />
      <CalculatorClassWithState />
    </div>
  );
}

export default App;
