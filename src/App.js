import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Filter from './components/Filter';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Filter />
            <Products />
          </>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
