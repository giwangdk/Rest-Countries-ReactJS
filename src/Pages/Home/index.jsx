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
