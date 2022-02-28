/* eslint-disable quotes */
/* eslint-disable import/no-useless-path-segments */
import React, { useState } from "react";
import { CardCountry } from "../../";

function ListCountry() {
  const [data, setData] = useState();

  return (
    <div>
      <CardCountry data={data} />
    </div>
  );
}

export default ListCountry;
