import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { AuthContext } from './contents/Authcontext';
import { LoginAuth } from './contents/Authcontext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoginAuth>

    <App />
    </LoginAuth>
  </BrowserRouter>
  
 
);


