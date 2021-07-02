import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {

  return (
    <Link to={"/region/"+item.name} className="card">
      <img src={item.flag} className="card-img" alt={`${item.name} flag`} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <ul className="card-list">
          <li><span>Population </span>: {item.population}</li>
          <li><span>Region </span>: {item.region}</li>
          <li><span>Capital </span>: {item.capital}</li>
        </ul>
      </div>
    </Link>
  )
}

export default Card
