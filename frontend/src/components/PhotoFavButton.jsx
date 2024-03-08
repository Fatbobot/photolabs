import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isLiked, toggleFavorite } = props;

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;