/* eslint-disable quotes */
import React from "react";
import Button from "../../atoms/Button";

function BorderCountries() {
  return (
    <div className="border-countries flex justify-between">
      <p>Border Countries : </p>
      <div className="border-group">
        <Button label="Myanmar" />
      </div>
    </div>
  );
}

export default BorderCountries;
