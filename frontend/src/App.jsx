import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import MockPhotos from 'mocks/photos.js';
import MockTopics from 'mocks/topics.js';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [...Array(3)];
  // const photoItems = photos.map((photo, index) => 
  //   <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  // );
  return (
    <div className="App">
      <HomeRoute MockTopics = {MockTopics} MockPhotos = {MockPhotos}/>
    </div>
  );
};

export default App;
