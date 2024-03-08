import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [...Array(3)];
  // const photoItems = photos.map((photo, index) => 
  //   <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  // );
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
