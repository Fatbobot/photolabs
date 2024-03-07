import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <div className="photo-list__item">
      <img src={photo.urls.regular} alt="A photo" />
      <div className="photo-list__item-details">
        <img src={photo.user.profile} alt="Profile" />
        <div className="photo-list__item-details-text">
          <h2>{photo.user.username}</h2>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
        <PhotoFavButton />
      </div>
    </div>
  );
};

export default PhotoListItem;
