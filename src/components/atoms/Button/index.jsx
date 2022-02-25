/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick }) {
  return (
    <button
      className="px-4 py-1 text-sm border border-slate-300 text-slate-500 rounded shadow shadow-slate-500/40"
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
  label: "Button",
  onClick: () => {},
};

export default Button;
