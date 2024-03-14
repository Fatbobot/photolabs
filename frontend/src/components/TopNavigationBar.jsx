// Import necessary components and styles
import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

// Define the TopNavigation component
const TopNavigation = ({ topics, isFavPhotoExist, getPhotosByTopic }) => {
  // Render the TopNavigation component
  return (
    <div className="top-nav-bar">
      {/* Render the logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* Render the TopicList component and pass the necessary props */}
      <TopicList topicList={topics} getPhotosByTopic={getPhotosByTopic} />

      {/* Render the FavBadge component and pass the necessary props */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

// Export the TopNavigation component as the default export
export default TopNavigation;