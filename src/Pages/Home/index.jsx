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

  const fetchData = async (name, region) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/${
          name ? `name/${name}` : region ? `region/${region}` : "all"
        }`
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

  const searchCountry = (country) => {
    fetchData(country);
  };

  const filterByRegion = (region) => {
    fetchData(region);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Search action={searchCountry} />
      <DropDown action={filterByRegion} />
      <ListCountry data={data} />
    </>
  );
}

export default Home;
