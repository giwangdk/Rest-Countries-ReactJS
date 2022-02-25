/* eslint-disable quotes */
import React from "react";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Toggle() {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faMoon} color="gray" />
      <p>Dark Mode</p>
    </div>
  );
}

export default Toggle;
