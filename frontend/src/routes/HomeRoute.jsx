import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const HomeRoute = ({state, mockTopics, mockPhotos, closeModal, getPhotosByTopic, toggleFavorite, handlePhotoClick}) => {
  const { favoritePhotos, displayModal, singlePhotoDetail } = state;
  // const [isLiked, setIsLiked] = useState(false);
  // const [favoritePhotos, setFavoritePhotos] = useState([]);
  // const [displayModal, setDisplayModal] = useState(false);
  // const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  // const toggleFavorite = (id) => {
  //   if (favoritePhotos.includes(id)) {
  //     // setIsLiked(false);
  //     setFavoritePhotos(favoritePhotos.filter(photoId => photoId !== id));
  //   } else {
  //     // setIsLiked(true);
  //     setFavoritePhotos([...favoritePhotos, id]);
  //   }
  // };
  // const handlePhotoClick = (photo) => {
  //   if (photo.similar_photos) {
  //     setSinglePhotoDetail(photo);
  //   } else {
  //     const matchedPhoto = mockPhotos.find(p => p.id === photo.id);
  //     setSinglePhotoDetail(matchedPhoto);
  //   }
  //   setDisplayModal(true);
  // };
  return (
    <div className="App">
      <TopNavigationBar 
      state={state}
      isFavPhotoExist={favoritePhotos.length > 0} 
      topics={mockTopics} 
      getPhotosByTopic={getPhotosByTopic}/>

      <PhotoList 
      state={state}
      photos={mockPhotos} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      onPhotoClick={handlePhotoClick}
      /> 
      {displayModal && <PhotoDetailsModal
      state={state}
      photo={singlePhotoDetail} 
      isLiked={favoritePhotos.includes(singlePhotoDetail.id)} 
      toggleFavorite={toggleFavorite} 
      favoritePhotos={favoritePhotos} 
      onPhotoClick={handlePhotoClick}
      closeModal={closeModal}/>}
      </div>
  );
};

export default HomeRoute;