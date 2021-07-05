import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionsContext } from "../context/RegionsContext";

const Filter = () => {
  const [region, setRegion] = useState("Filter by Region");
  const { setRegions, setLoading } = useContext(RegionsContext);

  const getCountry = async () => {
    if (region === "Filter by Region") {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      const result = res.data.map((reg) => {
        if (reg.population === 8527400) {
          reg.name = "Palestine, State of";
          reg.flag =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/1200px-Palestine_Flag.svg.png";
          reg.population = 4682467;
          reg.capital = "alquds";
          return reg;
        }

        if (reg.population === 4682467) {
          reg.capital = "alquds";
        }

        return reg;
      });
      setRegions(result);
    } else {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      const result = res.data.map((reg) => {
        if (reg.population === 8527400) {
          reg.name = "Palestine, State of";
          reg.flag =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/1200px-Palestine_Flag.svg.png";
          reg.population = 4682467;
          reg.capital = "alquds";
          return reg;
        }

        if (reg.population === 4682467) {
          reg.capital = "alquds";
        }

        return reg;
      });
      setRegions(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountry();
  }, [region]);

  const handelChange = ({ target }) => {
    setRegion(target.value);
  };

  return (
    <select
      onChange={handelChange}
      value={region}
      className="form-select border-0 shadow-sm py-3"
      aria-label="Default select example"
    >
      <option>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
