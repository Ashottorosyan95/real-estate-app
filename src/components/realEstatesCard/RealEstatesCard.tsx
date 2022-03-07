import React from 'react';
import './RealEstatesCard.scss';
import {ReactComponent as LocationIcon} from '../../icons/location.svg';

interface RealEstatesCardProp {
  id: number,
  name: string,
  image: string,
  location: string,
  bedrooms: number,
  bathrooms: number,
  price: number,
  type: string,
  created_at: string
}

const RealEstatesCard = ({realEstate}: {realEstate: RealEstatesCardProp}) => {
  return (
    <div className='real-estates-card'>
      <div className='real-estates-image'>
        <img src={realEstate.image} alt={realEstate.name} />
      </div>
      <div className='real-estates-details'>
        <h3 className='title'>{realEstate.name}</h3>
        <div className='location'>
          <LocationIcon /> {realEstate.location}
        </div>
        <div className='rooms'>
          {`${realEstate.bedrooms} Slaapkamers`} 
          <span></span>
          {`${realEstate.bathrooms} Badkamers`} 
        </div>
        <div className='price'>€ {realEstate.price}</div>
      </div>
    </div>
  )
}

export default RealEstatesCard