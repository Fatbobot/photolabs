import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos , toggleFavorite, favoritePhotos, onPhotoClick}) => {
  const photoVals = typeof photos === 'object' && !Array.isArray(photos) ? Object.values(photos) : photos;
  var photolist =
      photoVals.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isLiked={favoritePhotos.includes(photo.id)}
          toggleFavorite={() => toggleFavorite(photo.id)}
          onPhotoClick= {() => onPhotoClick(photo)}
        />
      ))
  return (
    <div className="photo-list">
      {photolist}
    </div>
  );
};

export default PhotoList;
