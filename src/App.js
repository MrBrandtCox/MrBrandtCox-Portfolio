import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';

function App() {

  // const [currentTab,setCurrentTab] = useState('About') // set to About page....about page renders on other page clicks

  // const renderTab = () => {
  //   if (currentTab === 'About') {
  //     return <About />
  //   }
  //   if (currentTab === 'Portfolio') {
  //     return <Portfolio />
  //   }
  //   if (currentTab === 'Resume') {
  //     return <Resume />
  //   }
  //   else {
  //     return <Contact />
  //   }
  // }

  // const handleTabChange = (tab) => setCurrentTab(tab)

  return (
    <div> 
      <div>
        <Nav />
      </div>
      <Footer />
    </div>
  );
}

export default App;
