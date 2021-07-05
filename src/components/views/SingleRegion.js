import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleRegion = (props) => {
  const name = props.match.params.name;
  const [region, setRegion] = useState([]);

  const getRegion = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => {
        // Israel is not a country
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
        setRegion(result);
      });
  };

  useEffect(() => {
    getRegion();
  }, []);

  if (region.length > 0) {
    return (
      <div className="single-region">
        <div className="container">
          <Link to="/" className="back-btn btn">
            <i className="bx bx-left-arrow-alt"></i>
            <span>Back</span>
          </Link>
          <div className="row-single-region">
            <div className="region-flag">
              <img src={region[0].flag} alt="" />
            </div>

            <div>
              <h1>{region[0].name}</h1>
              <ul className="region-details">
                <li>
                  <span>Native Name: </span> {region[0].nativeName}
                </li>
                <li>
                  <span>Population: </span> {region[0].population}
                </li>
                <li>
                  <span>Region: </span> {region[0].region}
                </li>
                <li>
                  <span>Sub Region: </span> {region[0].subregion}
                </li>
                <li>
                  <span>Capital: </span> {region[0].capital}
                </li>
                <li>
                  <span>Top Level Domain: </span> {region[0].topLevelDomain}
                </li>
                <li>
                  <span>Currencies: </span> {region[0].currencies[0].code}
                </li>
                <li>
                  <span>Languages: </span>{" "}
                  {region[0].languages.map((item, index) => {
                    if (region[0].languages.length - 1 === index) {
                      return item.name;
                    } else {
                      return item.name + ", ";
                    }
                  })}
                </li>
              </ul>
              <div className="borders-countries">
                <h4>Border Countries : </h4>
                <div>
                  {region[0].borders.map((item) => (
                    <span>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default SingleRegion;
