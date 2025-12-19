import "./countrydetails.css";
const CountryDetails = ({
  name,
  flag,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
  onBack,
}) => {
  return (
    <div className="country-card-detailed">
      <button onClick={onBack} className="bg-component back-btn">
        <i class="fa-solid fa-arrow-left"></i> Back
      </button>
      <div className="country-card-detailed__details">
        <div className="country-card-detailed__details-left">
          <img src={flag} alt={`${name.common} flag`} />
        </div>

        <div className="country-card-detailed__details-right">
          <h2>{name}</h2>
          <div className="details-top">
            <div className="main-details">
              <p>Population: {population.toLocaleString("en-US")}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital?.join(", ")}</p>
            </div>
            <div className="secondary-details">
              <p>Top Level Domain: {tld?.join(", ")}</p>
              <p>
                Currencies:{" "}
                {currencies
                  ? Object.values(currencies)
                      .map((c) => c.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                Languages:{" "}
                {languages ? Object.values(languages).join(", ") : "N/A"}
              </p>
            </div>
          </div>
          <div className="details-bottom">
            <div className="border-details">
              <h2>Border Countries:</h2>
              <div className="border-details__countries">
                {borders?.length ? (
                  borders.map((border) => (
                    <span key={border} className="border-country bg-component">
                      {border}
                    </span>
                  ))
                ) : (
                  <p>None</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={onBack} className="bg-component back-btn">
        <i class="fa-solid fa-arrow-left"></i> Back
      </button>
    </div>
  );
};

export default CountryDetails;
