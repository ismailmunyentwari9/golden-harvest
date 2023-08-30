import './App.css';
import Nav from './components/Navigation';
import Mission from './components/Mission';
import About from './components/About';
import Sells from './components/Sells';
import Footer from './components/Footer';
import CoffeeSmell from './components/CoffeeSmell';

function App() {
  return (
    <div className="App">
      <Nav />
      <Mission />
      <About />
      <Sells />
      <CoffeeSmell />
      <Footer />
    </div>
  );
}

export default App;
