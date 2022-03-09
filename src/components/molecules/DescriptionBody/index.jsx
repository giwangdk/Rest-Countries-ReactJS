/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";

function DescriptionBody({ country }) {
  return (
    <div className="description-body flex justify-between w-100">
      <div className="body-left">
        <p>
          Native Name :
          {country?.name?.common}
        </p>
        <p>
          Region :
          {' '}
          {country?.region}
        </p>
        <p>
          Top Level Domain :
          {' '}
          {country?.tld[0]}
        </p>
        <p>
          Languages :
          {' '}
          {country?.languages?.spa}
          {' '}
        </p>
        <p>
          Capital :
          {country?.capital[0]}
        </p>
      </div>
      <div className="body-right">
        <p>
          Population :
          {country?.population}
        </p>
        <p>Sub region : </p>
        <p>
          Currencies :
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
