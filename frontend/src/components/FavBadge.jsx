// Import necessary components and styles
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

// Define the FavBadge component
const FavBadge = ({ isFavPhotoExist }) => {
  // Render the FavBadge component
  return (
    <div className='fav-badge'>
      {/* Render the FavIcon component and pass the necessary props */}
      <FavIcon displayAlert={isFavPhotoExist} selected={true}/>
    </div>
  );
};

// Export the FavBadge component as the default export
export default FavBadge;