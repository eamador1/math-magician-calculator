import React from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

function Button({ children, onClick }) {
  const isOperator = (value) => value === '÷' || value === '-' || value === '+' || value === 'x' || value === '=';

  return (
    <button
      type="button"
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
      onClick={onClick}
    >
      {children}
    </button>

  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired, // Define the 'id' prop type as a required string
  onClick: PropTypes.func.isRequired,
};

export default Button;
