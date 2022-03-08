/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import axios from 'axios';

const [data, setData] = useState(null);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);

export const fetchData = async (params) => {
  try {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/${params}`,
    );
    setLoading(false);
    console.log(response.data);
    setData(response.data);
  } catch (e) {
    console.log('error', e);
    setLoading(false);
    setError(true);
  }

  return { error, data, loading };
};
