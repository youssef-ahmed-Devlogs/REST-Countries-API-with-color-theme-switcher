import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {RegionsContext} from "../context/RegionsContext";

const Filter = () => {

  const [region, setRegion] = useState("Filter by Region");
  const {setRegions , setLoading} = useContext(RegionsContext);

  const getCountry = async () => {
    
    if(region === "Filter by Region") {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      setRegions(res.data);
    } else {
      const res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
      setRegions(res.data);
    }
    setLoading(false)

  }

  useEffect(() => {
    getCountry();
  }, [region])

  const handelChange = ({target}) => {
    setRegion(target.value);
  }

  return (
    <select onChange={handelChange} value={region} className="form-select border-0 shadow-sm py-3" aria-label="Default select example">
      <option>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}

export default Filter
