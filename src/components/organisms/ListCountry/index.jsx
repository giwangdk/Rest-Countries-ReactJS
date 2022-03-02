/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable import/no-useless-path-segments */
import React from "react";
import { CardCountry } from "../../molecules";

function ListCountry({ data }) {
  return (
    <div>
      {data?.map((country, i) => (
        <CardCountry country={country} key={i} />
      ))}
    </div>
  );
}

export default ListCountry;
