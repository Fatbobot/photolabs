// Import necessary components and styles
import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

// Define the TopicList component
const TopicList = ({ topicList, getPhotosByTopic }) => {
  // Render the TopicList component
  return (
    <div className='top-nav-bar__topic-list'>
      {/* Map over the topicList array and create a TopicListItem for each topic */}
      {topicList.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          // Pass the getPhotosByTopic function as a prop
          getPhotosByTopic={getPhotosByTopic} 
        />
      ))}
    </div>
  );
};

// Export the TopicList component as the default export
export default TopicList;