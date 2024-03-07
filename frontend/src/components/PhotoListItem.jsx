import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return(
    <div className="photo-list-item">
      <div className="photo-list-item__header">
        <img className="photo-list-item__profile" src={props.data.profile} alt="Profile" />
        <div className="photo-list-item__username">{props.data.username}</div>
      </div>
      <img className="photo-list-item__image" src={props.data.imageSource} alt="Photo" />
      <div className="photo-list-item__location">
        {props.data.location.city}, {props.data.location.country}
      </div>
    </div>
  )
};

export default PhotoListItem;
