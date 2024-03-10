import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const { photos , toggleFavorite, favoritePhotos, onPhotoClick} = props;
  var photolist =
      photos.map((photo) => (
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
