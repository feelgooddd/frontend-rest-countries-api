import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mode, setMode] = useState("dark");

useEffect(() => {
  const fetchRegion = async () => {
    const url =
      region === "all"
        ? "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders"

        : `https://restcountries.com/v3.1/region/${region}`;

    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  fetchRegion();
}, [region]);


  return (
    <div>
      <Header mode={mode} setMode={setMode} />
      {!selectedCountry && (
        <>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Filter setRegion={setRegion} />
        </>
      )}
      <Cards
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        searchQuery={searchQuery}
        data={data}
      />
    </div>
  );
};

export default App;
