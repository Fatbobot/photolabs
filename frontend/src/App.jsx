import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import MockPhotos from 'mocks/photos.js';
import MockTopics from 'mocks/topics.js';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo);
    setDisplayModal(true);
  };
  return (
    <div className="App">
      <HomeRoute mockTopics={MockTopics} mockPhotos={MockPhotos} onPhotoClick={handlePhotoClick}/>
      {displayModal && <PhotoDetailsModal photo={singlePhotoDetail} setDisplayModal={setDisplayModal}/>}
    </div>
  );
};

export default App;
