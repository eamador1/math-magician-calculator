import React, { useState } from 'react';
import '../styles/calculator.css';
import Screen from './Display';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setCalculatorData((prevState) => calculate(prevState, buttonName));
  }

  const { total, next } = calculatorData;
  const displayValue = next || total || '0';

  return (
    <div className="calculator-container">
      <Screen input={displayValue} />
      <div className="line">
        <Button onClick={() => handleClick('AC')}>AC</Button>
        <Button onClick={() => handleClick('+/-')}>+/-</Button>
        <Button onClick={() => handleClick('%')}>%</Button>
        <Button onClick={() => handleClick('÷')}>÷</Button>
      </div>
      <div className="line">
        <Button onClick={() => handleClick('7')}>7</Button>
        <Button onClick={() => handleClick('8')}>8</Button>
        <Button onClick={() => handleClick('9')}>9</Button>
        <Button onClick={() => handleClick('x')}>x</Button>
      </div>

      <div className="line">
        <Button onClick={() => handleClick('4')}>4</Button>
        <Button onClick={() => handleClick('5')}>5</Button>
        <Button onClick={() => handleClick('6')}>6</Button>
        <Button onClick={() => handleClick('-')}>-</Button>
      </div>
      <div className="line">
        <Button onClick={() => handleClick('1')}>1</Button>
        <Button onClick={() => handleClick('2')}>2</Button>
        <Button onClick={() => handleClick('3')}>3</Button>
        <Button onClick={() => handleClick('+')}>+</Button>
      </div>
      <div className="line">
        <Button onClick={() => handleClick('0')}>0</Button>
        <Button onClick={() => handleClick('.')}>.</Button>
        <Button onClick={() => handleClick('=')}>=</Button>
      </div>
    </div>

  );
}

export default Calculator;
