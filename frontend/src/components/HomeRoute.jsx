import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      {/*photoItems*/}
      <PhotoList/>
    </div>
  );
};

export default HomeRoute;