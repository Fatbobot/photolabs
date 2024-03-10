import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import MockPhotos from 'mocks/photos.js';
import MockTopics from 'mocks/topics.js';
import useApplicationData from './hooks/useApplicationData'; // Import the custom hook

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    closeModal,
    handlePhotoClick,
  } = useApplicationData(); // Use the custom hook

  return (
    <div className="App">
      <HomeRoute 
        mockTopics={MockTopics} 
        mockPhotos={state.photoData}
        // Pass the state and functions as props
        favoritePhotos={state.favoritePhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        handlePhotoClick={handlePhotoClick}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;