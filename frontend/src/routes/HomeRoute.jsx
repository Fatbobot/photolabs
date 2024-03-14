// Import necessary components and styles
import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

// Define the HomeRoute component
const HomeRoute = ({
  state, 
  mockTopics, 
  mockPhotos, 
  closeModal, 
  getPhotosByTopic, 
  toggleFavorite, 
  handlePhotoClick
}) => {
  // Destructure the necessary properties from state
  const { favoritePhotos, displayModal, singlePhotoDetail } = state;

  // Render the HomeRoute component
  return (
    <div className="App">
      {/* Render the TopNavigationBar component and pass the necessary props */}
      <TopNavigationBar 
        state={state}
        isFavPhotoExist={favoritePhotos.length > 0} 
        topics={mockTopics} 
        getPhotosByTopic={getPhotosByTopic}
      />

      {/* Render the PhotoList component and pass the necessary props */}
      <PhotoList 
        state={state}
        photos={mockPhotos} 
        toggleFavorite={toggleFavorite} 
        favoritePhotos={favoritePhotos} 
        onPhotoClick={handlePhotoClick}
      /> 

      {/* Conditionally render the PhotoDetailsModal component if displayModal is true */}
      {displayModal && (
        <PhotoDetailsModal
          state={state}
          photo={singlePhotoDetail} 
          // isLiked as a prop is created to globally check if the photo is liked or not
          isLiked={favoritePhotos.includes(singlePhotoDetail.id)} 
          toggleFavorite={toggleFavorite} 
          favoritePhotos={favoritePhotos} 
          onPhotoClick={handlePhotoClick}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

// Export the HomeRoute component as the default export
export default HomeRoute;