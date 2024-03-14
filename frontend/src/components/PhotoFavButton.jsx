// Import necessary components and styles
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// Define the PhotoFavButton component
const PhotoFavButton = ({ isLiked, toggleFavorite }) => {
  // Render the PhotoFavButton component
  return (
    <div 
      className="photo-list__fav-icon" 
      // Attach the toggleFavorite function to the onClick event
      onClick={toggleFavorite}
    >
      <div className="photo-list__fav-icon-svg">
        {/* Render the FavIcon component and pass the selected prop */}
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
};

// Export the PhotoFavButton component as the default export
export default PhotoFavButton;