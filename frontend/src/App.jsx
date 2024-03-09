import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import './App.scss';
import MockPhotos from 'mocks/photos.js';
import MockTopics from 'mocks/topics.js';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="App">
      <HomeRoute mockTopics={MockTopics} mockPhotos={MockPhotos} setDisplayModal={setDisplayModal}/>
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal}/>}
    </div>
  );
};

export default App;
