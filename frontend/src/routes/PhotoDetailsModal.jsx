// Import necessary components and styles
import React from 'react';
import PhotoList from "../components/PhotoList";
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

// Define the PhotoDetailsModal component
const PhotoDetailsModal = ({ closeModal, photo, isLiked, toggleFavorite, onPhotoClick, favoritePhotos }) => {
  // Render the PhotoDetailsModal component
  return (
    <div className="photo-details-modal">
      {/* Render the close button and attach the closeModal function to its onClick event */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img className="photo-details-modal__close-button" src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div>
          {/* Render the PhotoFavButton component and pass the necessary props */}
          <PhotoFavButton
            isLiked={isLiked}
            toggleFavorite={() => toggleFavorite(photo.id)}
          />
        </div>

        {/* Render the selected photo */}
        <img className="photo-details-modal__image" src={photo.urls.full} alt="selected photo" />

        <h2 className='photo-details-modal__header'></h2>

        {/* Render the photographer's details */}
        <div className="photo-details-modal__photographer-details">
          <img className='photo-details-modal__photographer-profile' src={photo.user.profile} alt="Profile" />
          <div className='photo-details-modal__photographer-info'>
            <span>{photo.user.name}</span>
            <div className='photo-details-modal__photographer-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>

        <h2 className='photo-details-modal__header'>Similar Photos</h2>

        <div className='photo-details-modal__top-bar'>
          {/* Render the PhotoList component for similar photos and pass the necessary props */}
          <PhotoList 
            photos={photo.similar_photos}
            isLiked={isLiked} 
            toggleFavorite={toggleFavorite} 
            favoritePhotos={favoritePhotos}
            onPhotoClick={onPhotoClick} 
          />
        </div>
      </div>
    </div>
  );
};

// Export the PhotoDetailsModal component as the default export
export default PhotoDetailsModal;