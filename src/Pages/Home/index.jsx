import React, { useEffect, useState } from "react";
import { ListCountry } from "../../components/organisms";

function Home() {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {};

  useEffect;
  return (
    <>
      <ListCountry />
    </>
  );
}

export default Home;
