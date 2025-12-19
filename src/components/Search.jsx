import React from "react";
import "./search.css";
const Search = ({ searchQuery, setSearchQuery }) => {
  console.log(searchQuery);
  return (
    <section className="search-area bg-component">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search-input"
        id=""
        placeholder="Search for a country..."
      />
    </section>
  );
};

export default Search;
