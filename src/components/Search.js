import axios from "axios";
import React, { useContext } from "react";
import { RegionsContext } from "../context/RegionsContext";

const Search = () => {
  const { setRegions } = useContext(RegionsContext);

  const handelChange = ({ target }) => {
    const name = target.value;
    if (name.trim() !== "") {
      handelSearch(name);
    }
  };

  const handelSearch = (name) => {
    axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => {
      setRegions(res.data);
    });
  };

  return (
    <div className="search">
      <input
        onChange={handelChange}
        type="text"
        className="form-control border-0 shadow-sm py-3"
        placeholder="Search for a country... "
      />
    </div>
  );
};

export default Search;
