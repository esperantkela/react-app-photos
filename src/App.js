
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
