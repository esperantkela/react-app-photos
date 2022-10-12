
import './App.css';
import Welcome from './components/Welcome';
import Car from './components/Car';
import Login from './components/Login';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/car">Car</Link>
            </li>
          </ul>
        </nav>
          <Routes>
            <Route path='/home' index element={<Welcome />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/car"  element={<Car />} />
          </Routes>
          
      </div>

    </BrowserRouter>
    </>
  );
}

export default App;
