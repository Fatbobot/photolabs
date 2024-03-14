import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = ({topics, isFavPhotoExist, getPhotosByTopic}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicList= {topics} getPhotosByTopic={getPhotosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;