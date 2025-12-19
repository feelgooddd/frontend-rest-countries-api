import "./card.css";
import { useState } from "react";
const Card = ({onClick, flag, name, population, region, capital }) => {

  return (
    <article onClick={onClick} className="bg-component country-card">
      <img src={flag} alt={name} />
      <div className="country-card-details">
        <h2>{name}</h2>
        <p>
          Population: <span>{population.toLocaleString("en-US")}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </article>
  );
};

export default Card;
