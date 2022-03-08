/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListCountry } from "../../components/organisms";
import { DropDown, Search } from "../../components";
import { fetchData } from "../../utils/fetchData";

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchCountry = (name) => {
    fetchData(setLoading, setError, setData, `name/${name}`);
  };

  const filterByRegion = (region) => {
    fetchData(setLoading, setError, setData, `region/${region}`);
  };

  useEffect(() => {
    fetchData(setLoading, setError, setData, "all");
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
