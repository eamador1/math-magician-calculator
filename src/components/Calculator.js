import React from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

function Button({ children }) {
  const isOperator = (value) => value === '÷' || value === '-' || value === '+' || value === 'x' || value === '=';
  return (
    <div
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
    >
      {children}
    </div>

  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Define the 'id' prop type as a required string
};

export default Button;
