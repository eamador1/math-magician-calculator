import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/calculatorPage.css';

function CalculatorPage() {
  return (
    <div className="content">
      <h2>Lets do some math!</h2>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
