// TODO: Import the Front component from the front_and_sidebar mfe
// TODO: Import the useMediaContext hook from the mediastore mfe
import { useMediaContext } from 'mediastore/contextHooks';


const Home = () => {
  // TODO: Use the useMediaContext hook to get the mediaItems
  const { mediaItems } = useMediaContext();

  // TODO: Pass the mediaItems to the Front component
  return <div>Home</div>;
};

export default Home;
