import React, { useState, useEffect } from "react";
import "./search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);

    return () => clearTimeout(timer); // cleanup previous timeout
  }, [inputValue, setSearchQuery]);

  return (
    <section className="search-area bg-component">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search for a country..."
      />
    </section>
  );
};

export default Search;
