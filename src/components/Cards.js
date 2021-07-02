import React, { useContext } from 'react'
import { RegionsContext } from '../context/RegionsContext';
import Card from './Card'

const Cards = () => {

  const {regions, loading} = useContext(RegionsContext);

  const renderCards = () => {
    const reg = regions.map(item => <Card key={item.alpha2Code} item={item}  />);
    return reg;
  }

  return (
    <div className="cards">
      <div className="container">
        {loading && <h5 className="text-center">Loading...</h5>}
        <div className="cards-row">
          {renderCards()}
        </div>
      </div>
    </div>
  )
}

export default Cards
