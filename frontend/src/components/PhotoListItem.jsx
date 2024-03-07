import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt="A photo" />
      <div className="photo-list__item-details">
        <img src={photo.profile} alt="Profile" />
        <div className="photo-list__item-details-text">
          <h2>{photo.username}</h2>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
