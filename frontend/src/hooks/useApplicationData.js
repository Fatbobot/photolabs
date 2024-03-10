import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({ favoritePhotos: [] });
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateToFavPhotoIds = (photoId) => {
    setState(prevState => ({
      ...prevState,
      favoritePhotos: [...prevState.favoritePhotos, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;