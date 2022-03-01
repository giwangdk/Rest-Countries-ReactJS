/* eslint-disable comma-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListCountry } from "../../components/organisms";
import { DropDown } from "../../components";

function Home() {
  const [data, setData] = useState(0);
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
      console.log(e);
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
      <DropDown />
      <ListCountry />
    </>
  );
}

export default Home;
