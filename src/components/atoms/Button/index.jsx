/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <button
      className="px-2 py-2 border-gray-700 text-gray-700"
      onClick={onClick}
    >
      {label}

    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => {},
};

export default Button;
