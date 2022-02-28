/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { ListCountry } from "../../components/organisms";
import axios from "axios";

function Home() {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios("https://restcountries.com/v3.1/all");
      setLoading();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect;
  return;
  <ListCountry />;
}

export default Home;
