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
      const result = res.data.map((reg) => {
        if (reg.population === 8527400) {
          reg.name = "Palestine, State of";
          reg.flag =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/1200px-Palestine_Flag.svg.png";
          reg.population = 4682467;
          reg.capital = "alquds";
          return reg;
        }
        return reg;
      });
      setRegions(result);
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
