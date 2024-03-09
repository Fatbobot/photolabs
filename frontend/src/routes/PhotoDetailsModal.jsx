import React, { useEffect } from 'react';
import PhotoList from "../components/PhotoList";
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({setDisplayModal, singlePhotoDetail}) => {
  useEffect(() => {
    console.log(singlePhotoDetail);
  }, [singlePhotoDetail]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
      onClick={() => setDisplayModal(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={singlePhotoDetail.urls.full} alt="selected photo" />
      <div>
        <h2>Similar Photos</h2>
        <PhotoList photos={singlePhotoDetail.similar_photos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
