import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const { mockTopics, mockPhotos } = props;
  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const toggleFavorite = (id) => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setFavoritePhotos(favoritePhotos.filter(photoId => photoId !== id));
    } else {
      setFavoritePhotos([...favoritePhotos, id]);
    }
  };
  return (
    <div className="App">
      <TopNavigationBar topics={mockTopics}/>
      {/*photoItems*/}
      <PhotoList photos={mockPhotos} isLiked={isLiked} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}/> </div>
  );
};

export default HomeRoute;