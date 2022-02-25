/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="bg-white shadow shadow-gray-500  w-80 rounded px-3 py-1 flex justify-between items-center">
      <FontAwesomeIcon icon={faSearch} color="gray" />
      <input
        type="text"
        name=""
        id=""
        className="  outline-gray-100 py-1 px-2 w-full ml-3"
      />
    </div>
  );
}

export default Search;
