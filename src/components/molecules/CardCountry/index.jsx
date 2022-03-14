/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
import React from "react";
import { useNavigate } from 'react-router-dom';

function CardCountry({ country }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${country?.cca3.toLowerCase()}`);
  };

  return (
    <div className="card border rounded-md shadow shadow-gray-300" onClick={handleClick}>
      <div className="card-img">
        <img src={country?.flags?.png} className="rounded-t-md" alt="" />
      </div>
      <div className="card-body text-left p-3 ">
        <div className="card-title mb-3">
          <h2 className="font-bold text-lg">{country?.name?.official}</h2>
        </div>
        <div className="card-desc">
          <ul>
            <li>
              <b>Population :</b> {country?.population}
            </li>
            <li>
              <b>Region :</b> {country?.region}
            </li>
            <li>
              <b>Capital :</b> {country?.capital?.[0]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardCountry;
