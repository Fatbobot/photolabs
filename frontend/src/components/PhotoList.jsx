import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const { photos, toggleFavorite, favoritePhotos, onPhotoClick} = props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isLiked={favoritePhotos.includes(photo.id)}
          toggleFavorite={() => toggleFavorite(photo.id)}
          onPhotoClick= {() => onPhotoClick(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
