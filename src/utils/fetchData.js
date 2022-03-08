/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchData = async (setLoading, setError, setData, params) => {
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
};
