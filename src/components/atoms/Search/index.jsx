/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="bg-white shadow shadow-slate-500  w-80 rounded px-3 py-1">
      <div>
        <FontAwesomeIcon icon={["fas", "coffee"]} />
      </div>
      <input
        type="text"
        name=""
        id=""
        className="  outline-slate-100 py-1 px-2 w-full"
      />
    </div>
  );
}

export default Search;
