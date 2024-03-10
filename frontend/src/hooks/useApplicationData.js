import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({ favoritePhotos: [] });
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  const updateToFavPhotoIds = (photoId) => {
    setState(prevState => {
      if (prevState.favoritePhotos.includes(photoId)) {
        return {
          ...prevState,
          favoritePhotos: prevState.favoritePhotos.filter(id => id !== photoId),
        };
      } else {
        return {
          ...prevState,
          favoritePhotos: [...prevState.favoritePhotos, photoId],
        };
      }
    });
  };
  const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo);
    setDisplayModal(true)
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return {
    state,
    updateToFavPhotoIds,
    closeModal,
    handlePhotoClick,
  };
};

export default useApplicationData;