import './App.css';
import './styles.css/Header.css';
import './styles.css/Footer.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <div className="portfolio-brandt">
      <Header />
      <Nav />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
