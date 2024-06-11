import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Catalog from './pages/Catalog';
import ShoppingList from './pages/ShoppingList';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />
      <About />
      <ShoppingList />

      <Footer />
    </div>
  );
}

export default App;

// QuantityPicker
