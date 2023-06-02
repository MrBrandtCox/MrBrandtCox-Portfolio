import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {

  const [currentTab,setCurrentTab] = useState('') // set to About page

  const renderTab = () => {
    if (currentTab === 'About') {
      return <About />
    }
    if (currentTab === 'Portfolio') {
      return <Portfolio />
    }
    if (currentTab === 'Resume') {
      return <Resume />
    }
    if (currentTab === 'Contact') {
      return <Contact />
    }
  }

  const handleTabChange = (tab) => setCurrentTab(tab)

  return (
    <div> 
      <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      {renderTab()}
      <Footer />
      {/* this div needs to be fixed so it doesn't render everything at once, rather when page is clicked. */}
      {/* <Header />
      <Nav />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer /> */}
    </div>
  );
}

export default App;
