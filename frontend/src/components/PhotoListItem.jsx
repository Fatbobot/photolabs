import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.regular} alt="A photo" />
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
