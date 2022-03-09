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
      <Button label="Back" className="my-5" />
      {data?.map((country) => (
        <div className="flex justify-between mt-5 items-center">
          <div className="image-flag w-96">
            <img src={country?.flags?.png} style={{ width: '100%', objectFit: 'contain', backgroundSize: 'cover' }} alt={country?.name?.official} />

          </div>
          <div className="description w-1/2 ml-4">
            <h2 className="text-3xl font-bold">{country?.name?.official}</h2>
            <DescriptionBody country={country} />
            <BorderCountries borders={country?.borders} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Detail;
