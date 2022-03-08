/* eslint-disable quotes */
import React from "react";
import Button from "../../components/atoms/Button";

function Detail() {
  return (
    <>
      <Button label="Back" />
      <div className="flex">
        <img src="/" alt="" />
        <div className="description">
          <h2>Belgium</h2>
          <div className="description-body">
            <div className="body-left">
              <p>Native Name : </p>
              <p>Region : </p>
              <p>Top Level Domain :</p>
              <p>Languages : </p>
              <p>Capital : </p>
            </div>
            <div className="body-ri">
              <p>Population : </p>
              <p>Sub region : </p>
              <p>Currencies : </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries : </p>
            <div className="border-group">
              <Button label="Myanmar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
