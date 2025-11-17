import './App.css';
// ROUTER
import { Route, Routes } from "react-router-dom";
// PAGES
import Home from './pages/home';
import NotFound from './pages/404page'; // import your 404 page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} /> {/* catch-all 404 route */}
      </Routes>
    </div>
  );
}

export default App;