// Import necessary components and styles
import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// Define the PhotoList component
const PhotoList = ({ photos, toggleFavorite, favoritePhotos, onPhotoClick }) => {
  // If photos is an object (and not an array), convert it to an array of its values
  const photoVals = typeof photos === 'object' && !Array.isArray(photos) ? Object.values(photos) : photos;

  // Map over the photos array and create a PhotoListItem for each photo
  const photolist = photoVals.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      // Check if the photo is in the list of favorite photos
      isLiked={favoritePhotos.includes(photo.id)}
      // When the favorite button is clicked, toggle the favorite status of the photo
      toggleFavorite={() => toggleFavorite(photo.id)}
      // When the photo is clicked, call the onPhotoClick function
      onPhotoClick={() => onPhotoClick(photo)}
    />
  ));

  // Render the PhotoList component
  return (
    <div className="photo-list">
      {photolist}
    </div>
  );
};

// Export the PhotoList component as the default export
export default PhotoList;