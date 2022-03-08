/* eslint-disable quotes */
import React from "react";
import Button from "../../components/atoms/Button";
import BorderCountries from "../../components/molecules/BorderCountries";
import DescriptionBody from "../../components/molecules/DescriptionBody";

function Detail() {
  return (
    <>
      <Button label="Back" />
      <div className="flex">
        <img src="/" alt="" />
        <div className="description">
          <h2>Belgium</h2>
          <DescriptionBody />
          <BorderCountries />
        </div>
      </div>
    </>
  );
}

export default Detail;
