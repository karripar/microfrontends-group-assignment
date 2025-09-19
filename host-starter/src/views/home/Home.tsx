//  Import the Front component from the front_and_sidebar mfe
//  Import the useMediaContext hook from the mediastore mfe
import { useMediaContext } from 'mediastore/contextHooks';
import Front from 'front_and_sidebar/Front';

const Home = () => {
  // : Use the useMediaContext hook to get the mediaItems
  const { mediaItems } = useMediaContext();
  console.log(mediaItems);

  // : Pass the mediaItems to the Front component
  return <div>
    {
      mediaItems && <Front mediaItems={mediaItems}/>
    }
  </div>;
};

export default Home;
