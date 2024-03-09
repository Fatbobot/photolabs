import React, { useEffect } from 'react';

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
    </div>
  )
};

export default PhotoDetailsModal;
