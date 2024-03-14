import { useReducer, useEffect } from 'react';
const initialState = {
  favoritePhotos: [],
  photoData: [],
  topicData: [],
  displayModal: false,
  singlePhotoDetail: null
}
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SINGLE_PHOTO_DETAIL: 'SET_SINGLE_PHOTO_DETAIL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: [...action.payload] };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_SINGLE_PHOTO_DETAIL:
      return { ...state, singlePhotoDetail: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
const API_URL = "http://localhost:8001/api";

const useApplicationData = () => {
  const [state, dispatch] = useReducer( reducer, initialState);
  
  const toggleFavorite = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const handlePhotoClick = (photo) => {
    if (photo.similar_photos) {
      dispatch({ type: ACTIONS.SET_SINGLE_PHOTO_DETAIL, payload: photo });
    } else {
      const matchedPhoto = state.photoData.find(p => p.id === photo.id);
      dispatch({ type: ACTIONS.SET_SINGLE_PHOTO_DETAIL, payload: matchedPhoto });
    }
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };
  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  const getPhotosByTopic = (topic_id) => {
    fetch(`${API_URL}/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      })
      .catch((error) => console.error('Error:', error));
  }
  const getPhotos = () => {
    fetch(`${API_URL}/photos`)
      .then((res) => res.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      });
  }
  
  const getTopics = () => {
    fetch(`${API_URL}/topics`)
      .then((res) => res.json())
      .then((topicData) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      });
  }
  useEffect(() => {
    getTopics();
  }, []);
  useEffect(() => {
    getPhotos();
  }, []);

  return {
    state,
    toggleFavorite,
    closeModal,
    handlePhotoClick,
    getPhotosByTopic,
  };
};

export default useApplicationData;