/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, className }) {
  return (
    <button
      className={`px-4 py-1 text-sm border border-gray-300 text-gray-500 rounded shadow shadow-gray-500/40 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "Button",
  className: "",
  onClick: () => {},
};

export default Button;
