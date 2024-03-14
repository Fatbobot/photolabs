import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, getPhotosByTopic}) => {
  const handleClick = () => {
    getPhotosByTopic(topic.id);
  };
  return (
    <div className="topic-list__item" onClick = {handleClick}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
