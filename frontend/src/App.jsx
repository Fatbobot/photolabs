import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import MockPhotos from 'mocks/photos.js';
import MockTopics from 'mocks/topics.js';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute mockTopics={MockTopics} mockPhotos={MockPhotos}/>
    </div>
  );
};

export default App;
