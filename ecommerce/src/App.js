
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Grocery from './pages/Grocery';
import Pharmacy from './pages/Pharmacy';
import CardItems from './pages/Card';
import Individual from './pages/Individual';
import Cartpage from './pages/Cartpage';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCartItemError, addToCartItemLoading, getCartItem } from './store/cart/action';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  const fetchTheCart = () => {
    dispatch(addToCartItemLoading());
    axios({
      method: "get",
      url: "  http://localhost:3002/user"

    })
      .then(res => {
        console.log(res.data)
        dispatch(getCartItem(res.data));
      })
      .catch(err => {
        dispatch(addToCartItemError());
      })
  }

  useEffect(() => {
    fetchTheCart();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/grocery" element={<Pharmacy />}></Route>
        <Route path="/pharmacy" element={<Grocery />}></Route>
        <Route path="/carditems" element={<CardItems />}></Route>
        <Route path="/carditems/:id" element={<Individual />}></Route>
        <Route path="/cartpage" element={<Cartpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;





