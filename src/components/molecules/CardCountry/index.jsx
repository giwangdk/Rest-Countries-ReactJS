/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
import React from "react";

function CardCountry() {
  return (
    <div className="card border shadow shadow-gray-300">
      <div className="card-img">
        <img src="../../../logo.svg" alt="" />
      </div>
      <div className="card-body text-left p-3 ">
        <div className="card-title mb-3">
          <h2 className="font-bold text-lg">Australia</h2>
        </div>
        <div className="card-desc">
          <ul>
            <li>
              <b>Population :</b> 234566
            </li>
            <li>
              <b>Region :</b> Oceania
            </li>
            <li>
              <b>Capital :</b> Oceania
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardCountry;
