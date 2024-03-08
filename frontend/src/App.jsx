import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import TopicList from './components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [...Array(3)];
  // const photoItems = photos.map((photo, index) => 
  //   <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  // );
  return (
    <div className="App">
      <TopNavigationBar />
      <TopicList />
      {/*photoItems*/}
      <PhotoList/>
    </div>
  );
};

export default App;
