import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { mockTopics, mockPhotos } = props;
  const setLiked = () => {setIsLiked(!isLiked)};
  return (
    <div className="App">
      <TopNavigationBar topics={mockTopics}/>
      {/*photoItems*/}
      <PhotoList photos={mockPhotos} isLiked = {isLiked} setLiked = {setLiked}/>
    </div>
  );
};

export default HomeRoute;