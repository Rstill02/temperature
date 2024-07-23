import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import fanFaves from './pages/fanFaves';
import Autobiographies from './pages/autobiographies';
import fictionSeries from './pages/fictionSeries';
import Logic from './pages/logic';
import Spiritual from './pages/spiritual';
import Audiobooks from './pages/narrator';


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
        <Route path="/autobiographies" element={<Autobiographies />} />
        <Route path="/fictionSeries" element={<fictionSeries />} />
        <Route path="/logic" element={<Logic />} />
        <Route path="/spiritual" element={<Spiritual />} />
        <Route path='/audiobooks' element={<Audiobooks />} />
      </Routes>

      
      {/* footer */}
    </div>
    </BrowserRouter>
  );
}

export default App;
