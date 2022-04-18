 import './App.css';
import Home from './components/home';
import Customers from './components/customers'; 
import Products from './components/products';
import Sales from './components/sales';
import Stores from './components/stores';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
   return (
     <>
       <BrowserRouter>
       <div> 
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="customers" element={<Customers/>} />
          <Route path="product" element={<Products/>} />
          <Route path="sales" element={<Sales/>} />
          <Route path="store" element={<Stores/>} /> 

        </Routes> 
      </div>
      </BrowserRouter>  
    </>
  );
}

export default App;
