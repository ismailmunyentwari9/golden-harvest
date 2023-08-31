import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Nav from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About'; // Import your About component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {' '}
          {/* Use your About component */}
          {/* Define more routes if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
