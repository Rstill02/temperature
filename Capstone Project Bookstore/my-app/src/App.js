import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import fanFaves from './pages/fanFaves';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fanfaves" element={<fanFaves />} />
      </Routes>

      
      {/* footer */}
    </div>
    </BrowserRouter>
  );
}

export default App;
