//import React from 'react'
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "#f31 ", margin: "1rem 0" }}>{error}</p>;
};

ErrorMessage.propTypes = {
    error: PropTypes.any
  };

export default ErrorMessage;
