import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';
// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const { mockTopics, mockPhotos } = props;
  return (
    <div className="App">
      <TopNavigationBar topics={props.mockTopics}/>
      {/*photoItems*/}
      <PhotoList photos={props.mockPhotos}/>
    </div>
  );
};

export default HomeRoute;