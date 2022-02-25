/* eslint-disable quotes */
import React from "react";
import { Toggle } from "../../atoms";

function Navbar() {
  return (
    <div className="">
      <div className="container flex justify-between items-center mx-auto p-4">
        <div className="nav-brand">
          <h5>Where in the world?</h5>
        </div>

        <Toggle />
      </div>
    </div>
  );
}

export default Navbar;
