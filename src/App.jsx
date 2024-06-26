import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Service from "./Service";
import './app.css'
import Gallery from "./Gallery";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App