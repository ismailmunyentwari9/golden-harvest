import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Nav from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Tea from './pages/Tea';
import { TeaItems } from './components/TeaSectionB';
import { CoffeeItems } from './components/CoffeeSectionB';
import Coffee from './pages/Coffee';
import Itemdetails from './pages/Itemdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/name/:name" element={<Itemdetails Tea={TeaItems} Coffee={CoffeeItems} />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
