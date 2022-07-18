
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Appointment from './components/Appointment';
import AppointmentDetails from './components/AppointmentDetails';
import {Routes,Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login /> */}
      {/* {/* <Home /> */}
      {/* <Appointment />  */}
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/Appointment' element = {<Appointment/>}></Route>
       <Route path = "/Appointment/:id" element={<AppointmentDetails />}></Route> 
       </Routes>
  
    </div>
  );
}

export default App;
