/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({ action }) {
  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    action(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="bg-white shadow shadow-gray-500  w-80 rounded px-3 py-1 flex justify-between items-center">
      <FontAwesomeIcon icon={faSearch} color="gray" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          className="  outline-gray-100 py-1 px-2 w-full ml-3"
        />
      </form>
    </div>
  );
}

export default Search;
