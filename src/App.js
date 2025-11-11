import './App.css';
import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/home';
// import PageNotFound from './pages/404page';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
