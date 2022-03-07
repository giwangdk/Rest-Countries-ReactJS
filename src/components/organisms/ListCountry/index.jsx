/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable import/no-useless-path-segments */
import React from "react";
import { CardCountry } from "../../molecules";

function ListCountry({ data }) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {data?.map((country, i) => (
        <CardCountry country={country} key={i} />
      ))}
    </div>
  );
}

export default ListCountry;
