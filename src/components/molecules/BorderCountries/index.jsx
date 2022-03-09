/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import Button from "../../atoms/Button";

function BorderCountries({ borders }) {
  return (
    <div className="border-countries flex justify-between">
      <p className="font-semibold">Border Countries : </p>
      <div className="border-group flex justify-between">
        {
          borders?.map((border) => (
            <Button label={border} className="mr-3" />
          ))
        }
      </div>
    </div>
  );
}

export default BorderCountries;
