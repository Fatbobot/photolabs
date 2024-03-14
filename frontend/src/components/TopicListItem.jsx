// Import necessary components and styles
import React from "react";
import "../styles/TopicListItem.scss";

// Define the TopicListItem component
const TopicListItem = ({ topic, getPhotosByTopic }) => {
  // Define the handleClick function
  const handleClick = () => {
    // Call the getPhotosByTopic function with the topic's id
    getPhotosByTopic(topic.id);
  };

  // Render the TopicListItem component
  return (
    <div 
      className="topic-list__item" 
      // Attach the handleClick function to the onClick event
      onClick={handleClick}
    >
      {/* Render the topic's title */}
      <span>{topic.title}</span>
    </div>
  );
};

// Export the TopicListItem component as the default export
export default TopicListItem;