import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const { mockTopics, mockPhotos} = props;
  const toggleFavorite = (id) => {
    if (favoritePhotos.includes(id)) {
      setIsLiked(false);
      setFavoritePhotos(favoritePhotos.filter(photoId => photoId !== id));
    } else {
      setIsLiked(true);
      setFavoritePhotos([...favoritePhotos, id]);
    }
  };
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo);
    setDisplayModal(true)
  };
  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={favoritePhotos.length > 0} topics={mockTopics}/>.
      {/*photoItems*/}
      <PhotoList 
      photos={mockPhotos} 
      isLiked={isLiked} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      onPhotoClick={handlePhotoClick}
      /> 

      {displayModal && <PhotoDetailsModal 
      setDisplayModal={setDisplayModal}
      photo={singlePhotoDetail} 
      isLiked={isLiked} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      onPhotoClick={handlePhotoClick}/>}
      </div>
  );
};

export default HomeRoute;