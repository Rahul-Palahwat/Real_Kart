import { Flex } from '@chakra-ui/react';
import './App.css';
import Filter from './components/Filter/Filter';
import ItemBox from './components/ItemBox/ItemBox';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Flex><Filter /><ItemBox /></Flex>}></Route>
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
