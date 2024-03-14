// Import necessary components and styles
import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

// Define the PhotoListItem component
const PhotoListItem = ({ photo, isLiked, toggleFavorite, onPhotoClick }) => {
  // Render the PhotoListItem component
  return (
    <div className="photo-list__item">
      {/* Render the PhotoFavButton component and pass the necessary props */}
      <PhotoFavButton isLiked={isLiked} toggleFavorite={toggleFavorite} />

      {/* Render the photo and attach the onPhotoClick function to its onClick event */}
      <img 
        className="photo-list__image" 
        src={photo.urls.regular} 
        alt="A photo" 
        onClick={onPhotoClick}
      />

      {/* Render the user's details */}
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

// Export the PhotoListItem component as the default export
export default PhotoListItem;