import { useState } from "react";
import Card from "./Card";
import CountryDetails from "./CountryDetails";
import "./cards.css";

const Cards = ({ selectedCountry, setSelectedCountry, data, searchQuery }) => {

  // If a country is selected, render only its details
  if (selectedCountry) {
    return (
      <CountryDetails
        {...selectedCountry}
        onBack={() => setSelectedCountry(null)}
      />
    );
  }

  return (
    <section className="cards-container">
      {data.map((country) => {
        const name = country.name.common;

        // Filter: only render if name includes search query
        if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return (
            <Card
              key={country.cca3}
              name={name}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              topleveldomain={country.tld}
              currencies={country.currencies}
              languages={country.languages}
              borders={country.borders}
              onClick={() => setSelectedCountry({
                name,
                flag: country.flags.svg,
                population: country.population,
                region: country.region,
                subregion: country.subregion,
                capital: country.capital,
                topleveldomain: country.tld,
                currencies: country.currencies,
                languages: country.languages,
                borders: country.borders,
              })}
            />
          );
        }

        return null;
      })}
    </section>
  );
};

export default Cards;
