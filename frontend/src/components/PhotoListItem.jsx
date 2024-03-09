import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo, isLiked, toggleFavorite, onPhotoClick}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton isLiked={isLiked} toggleFavorite={toggleFavorite}/>
      <img 
        className="photo-list__image" 
        src={photo.urls.regular} 
        alt="A photo" 
        onClick={() => onPhotoClick(photo)}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
