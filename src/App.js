import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <div className="content">

      {/* Header */}
      <Header />
 
      {/* Pages */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
  
     
       </Routes>

         
      </div>
    </div>
  );
}

export default App;
