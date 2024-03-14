// Import necessary modules and components
import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import useApplicationData from './hooks/useApplicationData'; 

// Define the App component
const App = () => {
  // Destructure the state and functions returned by useApplicationData
  const {
    state,
    getPhotosByTopic,
    toggleFavorite,
    closeModal,
    handlePhotoClick,
  } = useApplicationData();

  // Render the App component
  return (
    <div className="App">
      {/* Render the HomeRoute component and pass the necessary props */}
      <HomeRoute 
        state = {state}
        mockTopics={state.topicData} 
        mockPhotos={state.photoData}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={toggleFavorite}
        handlePhotoClick={handlePhotoClick}
        closeModal={closeModal}
        getPhotosByTopic={getPhotosByTopic}
      />
    </div>
  );
};

// Export the App component as the default export
export default App;