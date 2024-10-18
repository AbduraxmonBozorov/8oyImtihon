import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Sidebar from './layout/Sidebar';
import Friend from './components/ActiviteFriendly';
import LikedSongs from './pages/Likes';

const App = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Router>
        <aside className="w-64">
          <Sidebar />
        </aside>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/likes" element={<LikedSongs />} />
          </Routes>
        </main>
        <aside className="w-72 bg-gray-900">
          <Friend />
        </aside>
      </Router>
    </div>
  );
};

export default App;
