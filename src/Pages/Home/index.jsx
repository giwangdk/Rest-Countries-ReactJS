/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListCountry } from "../../components/organisms";

function Home() {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setLoading(false);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ListCountry />;
}

export default Home;
