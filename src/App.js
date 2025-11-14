import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
// import PageNotFound from './pages/404page';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
