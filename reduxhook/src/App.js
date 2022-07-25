import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Profile from "./pages/Profile";
import Newtask from './pages/Newtask';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/signup' element = {<Signup />}></Route>
      <Route path='/logout' element = {<Logout />}></Route>
      <Route path='/profile' element = {<Profile />}></Route>
      <Route path = "/newtask"element = {<Newtask/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
