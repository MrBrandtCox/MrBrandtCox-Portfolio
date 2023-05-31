import './App.css';
import './styles.css/Header.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
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
    </div>
  );
}

export default App;
