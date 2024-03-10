import React, { useEffect } from 'react';
import PhotoList from "../components/PhotoList";
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({closeModal, setDisplayModal, photo, isLiked, toggleFavorite, onPhotoClick, favoritePhotos}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
      onClick={() => setDisplayModal(false)}>
        <img className = "photo-details-modal__close-button" src={closeSymbol} alt="close symbol" />
        </button>
        <div className = "photo-details-modal__images">
          <div>
            <PhotoFavButton
              toggleFavorite={toggleFavorite} />
          </div>
          <img className = "photo-details-modal__image" src={photo.urls.full} alt="selected photo" />
          <h2 className='photo-details-modal__header'></h2>
        <div className= "photo-details-modal__photographer-details">
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
            <PhotoList 
            photos={Object.values(photo.similar_photos)}
            isLiked ={isLiked} 
            toggleFavorite={toggleFavorite} 
            favoritePhotos={favoritePhotos} 
            onPhotoClick={onPhotoClick}/>
          </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
