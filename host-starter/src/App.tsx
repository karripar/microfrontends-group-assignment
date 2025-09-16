import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Single from './views/single/Single';
import Profile from './views/profile/Profile';
import Upload from './views/upload/Upload';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './views/Layout';
import Home from './views/home/Home';
// TODO: import UserProvider from mediastore mfe
// TODO: import MediaProvider from mediastore mfe

function App() {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
