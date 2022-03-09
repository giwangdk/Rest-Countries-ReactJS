/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";

function DescriptionBody({ country }) {
  return (
    <div className="description-body flex justify-between  mb-8 mt-5 leading-7">
      <div className="body-left">
        <p>
          <b>Native Name: </b>
          {country?.name?.common}
        </p>
        <p>
          <b>Region: </b>
          {' '}
          {country?.region}
        </p>
        <p>
          <b>Top Level Domain: </b>
          {' '}
          {country?.tld[0]}
        </p>
        <p>
          <b>Languages: </b>
          {' '}
          {country?.languages?.spa}
          {' '}
        </p>
        <p>
          <b>Capital:  </b>
          {country?.capital[0]}
        </p>
      </div>
      <div className="body-right">
        <p>
          <b>Population: </b>
          {country?.population}
        </p>
        <p><b>Sub region: </b></p>
        <p>
          <b>Currencies: </b>
          {' '}
          {country?.currencies?.PEN?.name}
          ,
          {' '}
          {country?.currencies?.PEN?.symbol}
          {' '}
        </p>
      </div>
    </div>
  );
}

export default DescriptionBody;
