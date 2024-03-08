import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';
// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const { MockTopics, MockPhotos } = props;
  return (
    <div className="App">
      <TopNavigationBar topics={MockTopics}/>
      {/*photoItems*/}
      <PhotoList photos={MockPhotos}/>
    </div>
  );
};

export default HomeRoute;