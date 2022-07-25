
import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Navbar from './navbar/Navbar';
import Blogdetails from './pages/Blogdetails';
import BlogCreate from './pages/BlogCreate';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/login' element = {<Login/>}>Login</Route>
        <Route path = "/" element = {<Home />}>Home</Route>
        <Route path = "/blog" element={<Blogs />}>Blog</Route>
        <Route path='/blog/:id' element = {<Blogdetails/>}></Route>
        <Route path = "/blog/create" element = {<BlogCreate />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
