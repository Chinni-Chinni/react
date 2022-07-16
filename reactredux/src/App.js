
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
       <Header />
       <ProductDetails />
       <ProductListing />
     
   
    </div>
  );
}

export default App;
