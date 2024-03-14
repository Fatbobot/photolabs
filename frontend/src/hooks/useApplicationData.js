// Import necessary dependencies
import { useReducer, useEffect } from 'react';

// Define the initial state
const initialState = {
  favoritePhotos: [],
  photoData: [],
  topicData: [],
  displayModal: false,
  singlePhotoDetail: null
}

// Define the action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SINGLE_PHOTO_DETAIL: 'SET_SINGLE_PHOTO_DETAIL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

// Define the reducer function
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
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

// Define the API URL
const API_URL = "http://localhost:8001/api";

// Define the useApplicationData custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the toggleFavorite function
  const toggleFavorite = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  // Define the handlePhotoClick function
  const handlePhotoClick = (photo) => {
    if (photo.similar_photos) {
      dispatch({ type: ACTIONS.SET_SINGLE_PHOTO_DETAIL, payload: photo });
    } else {
      const matchedPhoto = state.photoData.find(p => p.id === photo.id);
      dispatch({ type: ACTIONS.SET_SINGLE_PHOTO_DETAIL, payload: matchedPhoto });
    }
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  // Define the closeModal function
  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  // Define the getPhotosByTopic function
  const getPhotosByTopic = (topic_id) => {
    fetch(`${API_URL}/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      })
      .catch((error) => console.error('Error:', error));
  }

  // Define the getTopicsAndPhotos function
  const getTopicsAndPhotos = () => {
    // Create an array of fetch promises
    const fetchPromises = [
      fetch(`${API_URL}/topics`).then((res) => res.json()),
      fetch(`${API_URL}/photos`).then((res) => res.json())
    ];

    // Use Promise.all to wait for all fetch promises to resolve
    Promise.all(fetchPromises)
      .then(([topicData, photoData]) => {
        // Dispatch the SET_TOPIC_DATA action
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
        // Dispatch the SET_PHOTO_DATA action
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      })
      .catch((error) => console.error('Error:', error));
  }

  // Call the getTopicsAndPhotos function when the component mounts
  useEffect(() => {
    getTopicsAndPhotos();
  }, []);

  // Return the necessary state and functions
  return {
    state,
    toggleFavorite,
    closeModal,
    handlePhotoClick,
    getPhotosByTopic,
  };
};

// Export the useApplicationData custom hook as the default export
export default useApplicationData;