import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const SearchAndFilter = () => {
  return (
    <div className="search-and-filter">
      <div className="container">
        <div className="search-and-filter-row">
          <Search />

          <Filter />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
