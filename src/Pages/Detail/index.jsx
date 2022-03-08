/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Button";
import BorderCountries from "../../components/molecules/BorderCountries";
import DescriptionBody from "../../components/molecules/DescriptionBody";
import { fetchData } from "../../utils/fetchData";

function Detail() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(setLoading, setError, setData, `alpha/per`);
  }, []);

  console.log("detail", data);

  return (
    <>
      <Button label="Back" />
      {data?.map((country) => (
        <div className="flex">
          <img src={country?.flags?.png} alt="" />
          <div className="description">
            <h2>{country?.name?.official}</h2>
            <DescriptionBody country={country} />
            <BorderCountries />
          </div>
        </div>
      ))}
    </>
  );
}

export default Detail;
