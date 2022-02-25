/* eslint-disable quotes */
import React from "react";
import { Toggle } from "../../atoms";

function Navbar() {
  return (
    <div className="border border-b-gray-200">
      <div className="container flex justify-between items-center mx-auto py-4 ">
        <div className="nav-brand">
          <h1 className="font-bold">Where in the world?</h1>
        </div>

        <Toggle />
      </div>
    </div>
  );
}

export default Navbar;
