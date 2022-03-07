/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListCountry } from "../../components/organisms";
import { DropDown, Search } from "../../components";

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/${params}`
      );
      setLoading(false);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log("error", e);
      setLoading(false);
      setError(true);
    }
  };

  const searchCountry = (name) => {
    fetchData(`name/${name}`);
  };

  const filterByRegion = (region) => {
    fetchData(`region/${region}`);
  };

  useEffect(() => {
    fetchData("all");
  }, []);

  return (
    <>
      <div className="flex justify-between my-10">
        <Search action={searchCountry} />
        <DropDown action={filterByRegion} />
      </div>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <ListCountry data={data} />
      )}
    </>
  );
}

export default Home;
