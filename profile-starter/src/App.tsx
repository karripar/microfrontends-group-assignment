import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./views/profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
