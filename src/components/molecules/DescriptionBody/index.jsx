/* eslint-disable quotes */
import React from "react";

function DescriptionBody() {
  return (
    <div className="description-body flex justify-between">
      <div className="body-left">
        <p>Native Name : </p>
        <p>Region : </p>
        <p>Top Level Domain :</p>
        <p>Languages : </p>
        <p>Capital : </p>
      </div>
      <div className="body-right">
        <p>Population : </p>
        <p>Sub region : </p>
        <p>Currencies : </p>
      </div>
    </div>
  );
}

export default DescriptionBody;
