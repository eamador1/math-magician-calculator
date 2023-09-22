import React from 'react';
import PropTypes from 'prop-types';
import '../styles/display.css';

const Screen = ({ input }) => (
  <div className="input">
    { input }
  </div>
);

Screen.propTypes = {
  input: PropTypes.string.isRequired, // Define the 'id' prop type as a required string
};

export default Screen;
