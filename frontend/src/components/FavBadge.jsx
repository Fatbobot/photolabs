import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;