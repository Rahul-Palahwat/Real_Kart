import './App.css';
import ItemBox from './components/ItemBox/ItemBox';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { useState } from 'react';

function App() {

  const [search , setSearch] = useState<string>("");
  console.log(search);

  return (
    <div className="App">
      <Router>
        <Navbar search={search} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<ItemBox search={search}/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<PlaceOrder/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
