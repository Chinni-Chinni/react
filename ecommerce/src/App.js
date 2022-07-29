
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Grocery from './pages/Grocery';
import Pharmacy from './pages/Pharmacy';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/grocery" element = {<Pharmacy />}></Route>
        <Route path = "/pharmacy" element = {<Grocery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
