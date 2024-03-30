import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog />
      <About/>

      <Footer/>
    </div>
  );
}

export default App;
