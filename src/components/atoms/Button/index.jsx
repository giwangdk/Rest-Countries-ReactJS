/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <button
      className="px-3 py-1 text-sm border border-slate-500 text-slate-700 rounded "
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
