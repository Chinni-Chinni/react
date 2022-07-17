import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContext } from './contents/Authcontext';
import { LoginAuth } from './contents/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginAuth>
    <App />
  </LoginAuth>
);


