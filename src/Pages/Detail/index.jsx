/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from "../../components/atoms/Button";
import BorderCountries from "../../components/molecules/BorderCountries";
import DescriptionBody from "../../components/molecules/DescriptionBody";
import { fetchData } from "../../utils/fetchData";

function Detail() {
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchDatas = async (params) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/${params}`,
      );
      setLoading(false);
      console.log(response.data);
      return (response);
    } catch (e) {
      console.log('error', e);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(async () => {
    fetchDatas(`alpha/per`).then((res) => {
      setData(res.data);
      const arrCountries = res?.data[0].borders;
      fetchDatas(`alpha?codes=${arrCountries.toString().toLowerCase()}`).then((country) => {
        setCountries(country?.data);
      });
    });
  }, []);

  console.log("detail", data);
  console.log("countries", countries);

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
            <BorderCountries borders={countries} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Detail;
