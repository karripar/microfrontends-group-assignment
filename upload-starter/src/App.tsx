import { Route, Routes } from 'react-router-dom';
import Upload from './views/upload/Upload.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Upload />} />
    </Routes>
  );
}

export default App;
