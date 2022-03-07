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
        </div>
      </div>
    </>
  );
}

export default Detail;
