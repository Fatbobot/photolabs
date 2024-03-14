import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
const TopicList = ({topicList, getPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicList.map((topic) => (
        <TopicListItem key ={topic.id} topic={topic} getPhotosByTopic = {getPhotosByTopic}/>
      ))}
    </div>
  );
};

export default TopicList;
